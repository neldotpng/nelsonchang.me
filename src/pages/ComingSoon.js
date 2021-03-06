import React, { Component } from 'react';
import '../scss/pages/ComingSoon.scss';

class ComingSoon extends Component {
  state = {
    heroTextStyle: `
      0px 0px 0 rgba(255,0,255,0.9),
      0px 0px 0 rgba(0,255,255,0.9),
      0px 0px 0 rgba(255,255,0,0.9),
      0px 0px 0 rgba(255,0,0,0.9)
    `,
  }

  onMouseMove = (e) => {
    let { offsetWidth: width, offsetHeight: height } = this.state.hero;
    let { pageX: x, pageY: y } = e;
    const walk = 8;
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);
    this.setOffset(xWalk, yWalk);
  }

  onDeviceMotion = (e) => {
    let {accelerationIncludingGravity: a} = e;
    let x = a.x / 10 * 6;
    let y = a.y / 2.5;

    this.setOffset(x, y);
  }

  setOffset = (xWalk, yWalk) => {
    this.setState({
      heroTextStyle: `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.9),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255,255,0,0.9),
        ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,255,0.9),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,0,0,0.9)
      `,
    });
  }

  componentDidMount() {
    this.setState({
      hero: document.querySelector('.ComingSoon-hero'),
    });
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this.onDeviceMotion);
    }
  }

  render() {
    return (
      <div className="ComingSoon">
        <div className="ComingSoon-background">
          <div className="ComingSoon-marquee">
            <span>Coming Soon Coming Soon Coming Soon&nbsp;</span>
            <span>Coming Soon Coming Soon Coming Soon&nbsp;</span>
          </div>
          <div className="ComingSoon-marquee ComingSoon-marquee__reverse">
            <span>S/S 2019 S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
            <span>S/S 2019 S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
          </div>
          <div className="ComingSoon-marquee">
            <span>Coming Soon Coming Soon Coming Soon&nbsp;</span>
            <span>Coming Soon Coming Soon Coming Soon&nbsp;</span>
          </div>
          <div className="ComingSoon-marquee ComingSoon-marquee__reverse">
            <span>S/S 2019 S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
            <span>S/S 2019 S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
          </div>
        </div>

        <header className="ComingSoon-hero" onMouseMove={this.onMouseMove}>
          <h1
            className="ComingSoon-heroText"
            style={{textShadow: this.state.heroTextStyle}}>
            nelson chang
          </h1>

          <a href="mailto:nelsonchang@gmail.com" className="ComingSoon-cta">
            contact
          </a>
        </header>
      </div>
    );
  }
}

export default ComingSoon;
