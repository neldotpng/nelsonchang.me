import React, { Component } from 'react';
import { TweenMax, Sine } from 'gsap';

import Particle from './Particle';
import debounce from '../../functions/debounce';

class TextCanvas extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    dpi: window.devicePixelRatio,
    words: [
      '장수영',
      '삼겹살',
      '겹삼수',
    ],
    grid: 13,
    size: 15,
    fontSize: '120vh',
    fontFamily: '"Black Han Sans", Helvetica',
    i: 0,
  }

  init = () => {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.txtCanv = document.createElement('canvas');
    this.txtCtx = this.txtCanv.getContext('2d');
    this.txtCtx.fillStyle = 'black';

    setTimeout(this.setValues, 1000);
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
            Math.pow(i, 1.35),
            this.positions[i].x,
            this.positions[i].y,
            this.ctx,
            this.state.size,
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
          this.state.size,
        )
      )
    }
  }

  getPixels = (keyword) => {
    this.txtCtx.clearRect(0, 0, this.txtCanv.width, this.txtCanv.height);
    this.txtCtx.fillText(keyword, this.txtCanv.width / 2 - this.txtCtx.measureText(keyword).width / 2, this.txtCanv.height / 2);

    const imgData = this.txtCtx.getImageData(0, 0, this.txtCanv.width, this.txtCanv.height);
    const buffer32 = new Uint32Array(imgData.data.buffer);

    this.positions = [];
    for (let y = 0; y < this.txtCanv.height; y += this.state.grid) {
      for (let x = 0; x < this.txtCanv.width; x += this.state.grid) {
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

  animateParticles = () => {
    this.positions.forEach((p, i) => {
      this.particles[i].move(this.mx, this.my);
      this.particles[i].draw();
    });
  }

  changeWord = () => {
    this.getPixels(this.state.words[this.state.i]);

    if (this.positions.length > this.particles.length) {
      this.addParticles();
    }

    this.positions.forEach((p, i) => {
      this.particles[i].homeX = p.x;
      this.particles[i].homeY = p.y;
    });
  }

  animate = debounce(() => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animateParticles();
    this.animation = requestAnimationFrame(this.animate);
  }, 1000 / 45)

  nextWord = () => {
    if (this.state.i === this.state.words.length - 1) {
      this.setState({
        i: 0,
      }, this.changeWord());
    } else {
      this.setState({
        i: this.state.i + 1
      }, this.changeWord());
    }
  }

  animateColors = () => {
    const timer = (this.particles.length - 1) * 0.00075;
    this.particles.forEach((p, i) => {
      TweenMax.to(p, timer, {
        radius: 11,
        delay: 0.00075 * i,
        yoyo: true,
        repeat: -1,
        easing: Sine.easeOut,
      });
    });
  }

  onMouseMove = (e) => {
    this.mx = (e.clientX - this.canvas.offsetLeft) * 2;
    this.my = (e.clientY - this.canvas.offsetTop) * 2;
  }

  onResize = () => {
    if (this.state.width !== window.innerWidth) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      }, () => {
        this.setValues();
      });
    }
  }

  componentDidMount() {
    this.init();

    setTimeout(() => {
      // this.nextWord();
      this.animateColors();
    }, 5000);

    window.addEventListener('resize', debounce(this.onResize, 1000 / 5));

    window.addEventListener('mousemove', this.onMouseMove);
  }


  render() {
    return (
      <div className="canvas">
        <div style={{fontFamily: 'Black Han Sans', fontSize: 0}}>
          {this.state.words[this.state.i]}
        </div>
        <canvas
          id="canvas"
          className="shared__canvas">
          장수영 삼겹살
        </canvas>
      </div>
    )
  }
}

export default TextCanvas;
