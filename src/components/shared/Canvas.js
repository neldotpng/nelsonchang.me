import React, { Component } from 'react';

class Canvas extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  componentDidMount() {
    this.dpi = window.devicePixelRatio;

    this.canvas = document.getElementById('canvas');
    this.canvas.setAttribute('width', this.state.width * this.dpi);
    this.canvas.setAttribute('height', this.state.height * this.dpi);

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = '150px Black Han Sans';
    this.ctx.fillText('장수영', 10, 150);
  }

  render() {
    return (
      <canvas
        id="canvas"
        className="shared__canvas"/>
    )
  }
}

export default Canvas;
