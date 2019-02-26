import React, { Component } from 'react';

import debounce from '../../functions/debounce';

class Canvas extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    yPos: 0,
  }

  drawCanvas = () => {
    this.dpi = window.devicePixelRatio;

    this.canvas = document.getElementById('canvas');
    this.canvas.setAttribute('width', this.state.width * this.dpi);
    this.canvas.setAttribute('height', this.state.height * this.dpi);

    this.ctx = this.canvas.getContext('2d');
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.font = `${this.state.height}px Black Han Sans`;
  }

  drawText = (str) => {
    const text = str.split('');
    const mi = (text.length - 1) / 2;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.filter = `blur(${Math.abs(this.state.yPos / 20)}px)`;

    text.forEach((char, i) => {
      const mult = i - mi;
      const xPos = (this.ctx.measureText(char).width * mult) + this.state.width;
      this.ctx.fillText(char, xPos, this.state.height + (this.state.yPos * mult));
    });
  }

  animate = debounce(() => {
    this.drawText('장수영');
    requestAnimationFrame(this.animate);
  }, 1000 / 30)

  onMouseMove = (e) => {
    const yPos = this.state.height / 2 - e.pageY;
    console.log(e.pageY);
    this.setState({ yPos });
  }

  init = () => {
    this.drawCanvas();
    this.animate();
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <canvas
        id="canvas"
        className="shared__canvas"
        onMouseMove={this.onMouseMove} />
    )
  }
}

export default Canvas;
