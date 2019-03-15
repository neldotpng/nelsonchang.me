import React, { Component } from 'react';
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
    fontSize: '100vh',
    i: 0,
  }

  init = () => {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.txtCanv = document.createElement('canvas');
    this.txtCtx = this.txtCanv.getContext('2d');
    this.txtCtx.fillStyle = 'black';

    this.setValues();
  }

  setValues = () => {
    this.canvas.width = this.state.width * this.state.dpi;
    this.canvas.height = this.state.height * this.state.dpi;

    this.particles = [];

    this.txtCanv.width = this.canvas.width;
    this.txtCanv.height = this.canvas.height;
    this.txtCtx.textBaseline = 'middle';
    this.txtCtx.font = `${this.state.fontSize} Black Han Sans`;

    this.getPixels(this.state.words[this.state.i]);
    this.makeParticles();

    setTimeout(() => {
      this.animate();
    }, 1000);
  }

  makeParticles = () => {
    for (let i = 0; i < this.positions.length; i++) {
      if (!!this.positions[i]) {
        this.particles.push(
          new Particle(
            this.positions[i].x,
            this.positions[i].y,
            this.ctx,
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
          this.ctx,
        )
      )
    }
  }

  getPixels = (keyword) => {
    const grid = 12;
    this.txtCtx.clearRect(0, 0, this.txtCanv.width, this.txtCanv.height);
    this.txtCtx.fillText(keyword, this.txtCanv.width / 2 - this.txtCtx.measureText(keyword).width / 2, this.txtCanv.height / 2);

    const imgData = this.txtCtx.getImageData(0, 0, this.txtCanv.width, this.txtCanv.height);
    const buffer32 = new Uint32Array(imgData.data.buffer);

    this.positions = [];
    for (let y = 0; y < this.txtCanv.height; y += grid) {
      for (let x = 0; x < this.txtCanv.width; x += grid) {
        if (buffer32[y * this.txtCanv.width + x]) {
          this.positions.push({
            x: x - this.state.width / 10,
            y: y,
          });
        }
      }
    }
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
  }, 1000 / 40)

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

  onMouseMove = (e) => {
    this.mx = (e.clientX - this.canvas.offsetLeft) * 2;
    this.my = (e.clientY - this.canvas.offsetTop) * 2;
  }

  onResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    }, () => {
      this.setValues();
    });
  }

  componentDidMount() {
    this.init();
    this.nextWord();

    // setInterval(this.nextWord, 5000);

    window.addEventListener('resize', debounce(() => {
      this.onResize();
    }, 1000 / 20))
  }


  render() {
    return (
      <canvas
        id="canvas"
        className="shared__canvas"
        onClick={this.nextWord}
        onMouseMove={this.onMouseMove} />
    )
  }
}

export default TextCanvas;
