import React, { Component } from 'react';
import Canvas from '../components/shared/Canvas';

class Home extends Component {
  render() {
    return (
      <div>
        <Canvas />
        <p className="hangul">장수영</p>
        <p className="sans">Nelson Chang</p>
      </div>
    )
  }
}

export default Home;
