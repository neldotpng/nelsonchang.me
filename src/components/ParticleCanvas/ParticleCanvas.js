import React, { Component } from 'react';
import Renderer from './Renderer';

class ParticleCanvas extends Component {
  componentDidMount() {
    this.renderer = new Renderer();
    this.renderer.init();
  }

  render() {
    return (
      <div id="container" style={{backgroundColor: "#222"}} />
    )
  }
}

export default ParticleCanvas;
