import React, { Component } from 'react';
import { TweenMax, Sine } from 'gsap';

import Particle from './Particle';
import debounce from '../functions/debounce';
import { isMobileDevice } from '../functions/browser-detect';

class TextCanvas extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    dpi: window.devicePixelRatio >= 2 ? window.devicePixelRatio : 2,
    words: [
      '장수영',
      '나는',
      '마르케',
      '오디세이',
      '트렁크',
      '이것저것',
      '다음',
    ],
    size: {
      max: 12.5 * window.devicePixelRatio,
      grid: 11.5 * window.devicePixelRatio,
      min: 10.5 * window.devicePixelRatio,
    },
    fontSize: `${70 * window.devicePixelRatio}vh`,
    fontFamily: 'Black Han Sans',
    i: 0,
  }

  init = () => {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.txtCanv = document.createElement('canvas');
    this.txtCtx = this.txtCanv.getContext('2d');
    this.txtCtx.fillStyle = 'black';
  }

  setValues = () => {
    this.canvas.width = this.state.width * this.state.dpi;
    this.canvas.height = this.state.height * this.state.dpi;

    this.particles = [];

    this.txtCanv.width = this.canvas.width;
    this.txtCanv.height = this.canvas.height;
    this.txtCtx.textBaseline = 'middle';
    this.txtCtx.font = `${this.state.fontSize} ${this.state.fontFamily}`;

    this.getPixels(this.state.words[this.state.i]);
    this.makeParticles();

    this.animate();
  }

  makeParticles = () => {
    for (let i = 0; i < this.positions.length; i++) {
      if (!!this.positions[i]) {
        this.particles.push(
          new Particle(
            this.state.width,
            Math.pow(i, 1.3) * Math.sin(i),
            this.positions[i].x,
            this.positions[i].y,
            this.ctx,
            this.state.size.max,
          )
        )
      }
    }
  }

  addParticles = () => {
    const nta = this.positions.length - this.particles.length;
    for (let i = 0; i <= nta; i++) {
      this.particles.push(
        new Particle(
          this.canvas.width / 2,
          i + this.canvas.height / 2,
          this.canvas.width / 2,
          i + this.canvas.height / 2,
          this.ctx,
          this.state.size.max,
          this.particles[0].color,
        )
      )
    }
  }

  removeParticles = () => {
    const newArr = this.particles.slice(0, this.positions.length);
    this.particles = newArr;
  }

  getPixels = (keyword) => {
    this.txtCtx.clearRect(0, 0, this.txtCanv.width, this.txtCanv.height);
    this.txtCtx.fillText(keyword, this.txtCanv.width / 2 - this.txtCtx.measureText(keyword).width / 2, this.txtCanv.height / 2);

    const imgData = this.txtCtx.getImageData(0, 0, this.txtCanv.width, this.txtCanv.height);
    const buffer32 = new Uint32Array(imgData.data.buffer);

    this.positions = [];
    for (let y = 0; y < this.txtCanv.height; y += this.state.size.grid) {
      for (let x = 0; x < this.txtCanv.width; x += this.state.size.grid) {
        if (buffer32[y * this.txtCanv.width + x]) {
          this.positions.push({ x, y });
        }
      }
    }

    const diff = (this.canvas.height - this.positions[this.positions.length - 1].y - this.positions[0].y) / 2;
    this.positions.forEach((p) => {
      p.y += diff;
    });
  }

  // getPixelsV = (keyword) => {
  //   this.txtCtx.clearRect(0, 0, this.txtCanv.width, this.txtCanv.height);
  //   this.txtCtx.textBaseline = 'top';
  //   this.setState({
  //     fontSize: `${90 / keyword.length * this.state.dpi}vh`
  //   }, () => {
  //     this.txtCtx.font = `${this.state.fontSize} ${this.state.fontFamily}`;
  //   });

  //   for (let i = 0; i < keyword.length; i++) {
  //     this.txtCtx.fillText(
  //       keyword[i],
  //       i * (this.txtCanv.width / 2) - this.txtCtx.measureText(keyword[i]).width / 2,
  //       i * (this.txtCanv.height / keyword.length),
  //     );
  //   }

  //   const imgData = this.txtCtx.getImageData(0, 0, this.txtCanv.width, this.txtCanv.height);
  //   const buffer32 = new Uint32Array(imgData.data.buffer);

  //   this.positions = [];
  //   for (let y = 0; y < this.txtCanv.height; y += this.state.size.grid) {
  //     for (let x = 0; x < this.txtCanv.width; x += this.state.size.grid) {
  //       if (buffer32[y * this.txtCanv.width + x]) {
  //         this.positions.push({ x, y });
  //       }
  //     }
  //   }

  //   const diff = (this.canvas.height - this.positions[this.positions.length - 1].y - this.positions[0].y) / 2;
  //   this.positions.forEach((p) => {
  //     p.y += diff;
  //   });
  // }

  animateParticles = () => {
    this.positions.forEach((p, i) => {
      this.particles[i].move(this.mx, this.my);
      this.particles[i].draw();
    });
  }

  changeWord = () => {
    TweenMax.killAll(true);

    this.getPixels(this.state.words[this.state.i]);

    if (this.positions.length > this.particles.length) {
      this.addParticles();
    } else {
      this.removeParticles();
    }

    this.positions.forEach((p, i) => {
      this.particles[i].homeX = p.x;
      this.particles[i].homeY = p.y;
    });

    this.tweenSize();
  }

  animate = debounce(() => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animateParticles();
    this.animation = requestAnimationFrame(this.animate);
  }, 1000 / 60)

  tweenSize = () => {
    const t = 3.5,
          l = this.particles.length;
    this.particles.forEach((p, i) => {
      TweenMax.to(p, t, {
        radius: this.state.size.min,
        homeX: p.getX() + 20,
        homeY: p.getY() + 20,
        delay: t / l * i,
        yoyo: true,
        repeat: -1,
        easing: Sine.easeInOut,
      });
    });
  }

  resetTween = () => {
    this.setValues();
    TweenMax.killAll(true);
    this.tweenSize();
  }

  onMouseMove = (e) => {
    this.mx = (e.clientX - this.canvas.offsetLeft) * this.state.dpi;
    this.my = (e.clientY - this.canvas.offsetTop) * this.state.dpi;
  }

  onResize = () => {
    if (this.state.width !== window.innerWidth ||
       (this.state.height !== window.innerHeight && this.state.width > 768)
    ) {
      this.setCanvasState();
    }
  }

  setCanvasState = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    }, () => {
      if (this.state.width >= 1600) {
        this.setState({
          size: {
            max: 15 * this.state.dpi,
            grid: 14 * this.state.dpi,
            min: 13 * this.state.dpi,
          },
          fontSize: `${75 * this.state.dpi}vh`,
        }, this.resetTween);
      } else if (this.state.width < 1600 && this.state.width >= 1080) {
        this.setState({
          size: {
            max: 12.5 * this.state.dpi,
            grid: 11.5 * this.state.dpi,
            min: 10.5 * this.state.dpi,
          },
          fontSize: `${70 * this.state.dpi}vh`,
        }, this.resetTween);
      } else if (this.state.width < 1080 && this.state.width >= 480) {
        this.setState({
          size: {
            max: 10 * this.state.dpi,
            grid: 9 * this.state.dpi,
            min: 8 * this.state.dpi,
          },
          fontSize: `${60 * this.state.dpi}vh`,
        }, this.resetTween);
      } else {
        this.setState({
          size: {
            max: 8 * this.state.dpi,
            grid: 7 * this.state.dpi,
            min: 6 * this.state.dpi,
          },
          fontSize: `${40 * this.state.dpi}vh`,
        }, this.resetTween);
      }
    });
  }

  onScrollToBottom = () => {
    this.updateWord(6, 0);
  }

  onScrollUp = () => {
    this.updateCanvas(this.props.location, 0);
  }

  initWord = () => {
    switch(this.props.location) {
      default:
      case '/':
        this.setState({ i: 0 });
        break;
      case '/about':
        this.setState({ i: 1 });
        break;
      case '/marquee-sports':
        this.setState({ i: 2 });
        break;
      case '/odyssey':
        this.setState({ i: 3 });
        break;
      case '/trunk-club':
        this.setState({ i: 4 });
        break;
      case '/ar-vr':
        this.setState({ i: 5 });
        break;
    }
  }

  updateWord = (i) => {
    this.setState({ i }, () => {
      this.props.getBgText(this.state.words[this.state.i]);
      this.changeWord();
    });
  }

  updateWord = (i, t) => {
    this.setState({ i }, () => {
      this.props.getBgText(this.state.words[this.state.i]);
      setTimeout(() => {
        this.changeWord();
      }, t);
    });
  }

  updateCanvas = (location, t) => {
    switch(location) {
      default:
      case '/':
        this.updateWord(0, t);
        break;
      case '/about':
        this.updateWord(1, t);
        break;
      case '/marquee-sports':
        this.updateWord(2, t);
        break;
      case '/odyssey':
        this.updateWord(3, t);
        break;
      case '/trunk-club':
        this.updateWord(4, t);
        break;
      case '/etc':
        this.updateWord(5, t);
        break;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.updateCanvas(this.props.location, 250);
    }
  }

  componentDidMount() {
    this.init();
    this.initWord();

    setTimeout(() => {
      this.updateCanvas(this.props.location);
      this.setCanvasState();
    }, 1500);

    window.addEventListener('resize', debounce(this.onResize, 1000 / 5));

    if (!isMobileDevice()) {
      window.addEventListener('mousemove', this.onMouseMove);
    }
  }

  render() {
    return (
      <div className="canvas">
        <div style={{fontFamily: 'Black Han Sans', fontSize: 0}}>
          장수영 나는 마르케 오디세이 트렁크 이것저것 다음
        </div>
        <canvas
          id="canvas"
          className="shared__canvas">
          {this.state.words[this.state.i]}
        </canvas>
      </div>
    )
  }
}

export default TextCanvas;
