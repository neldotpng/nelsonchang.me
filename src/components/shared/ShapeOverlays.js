import React, { Component } from 'react';

class ShapeOverlays extends Component {
  constructor() {
    super();
    this.elem = React.createRef();
  }

  state = {
    isNavOpened: false,
    isAnimating: false,
    numPoints: 3,
    duration: 450,
    delayPointsArray: [],
    delayPointsMax: 100,
    delayPerPath: 70,
    timeStart: Date.now(),
  }

  toggle = () => {
    this.setState({ isAnimating: true });
    const range = Math.random() * Math.PI * 2;
    const delayPointsArray = [];

    for (var i = 0; i < this.state.numPoints; i++) {
      const radian = (i / (this.state.numPoints - 1)) * Math.PI * 2;
      delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.state.delayPointsMax;
    }

    this.setState({ delayPointsArray });

    if (this.state.isNavOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open = () => {
    this.setState({
      isNavOpened: true,
      timeStart: Date.now(),
    }, this.renderLoop);
  }

  close = () => {
    this.setState({
      isNavOpened: false,
      timeStart: Date.now(),
    }, this.renderLoop);
  }

  cubicInOut = (t) => {
    return t < 0.5
      ? 4.0 * t * t * t
      : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  }

  updatePath = (time) => {
    const points = [];

    for (let i = 0; i < this.state.numPoints; i++) {
      points[i] = this.cubicInOut(
        Math.min(
          Math.max(time - this.state.delayPointsArray[i], 0) / this.state.duration, 1)
        ) * 100;
    }

    let str = '';
    str += (this.state.isNavOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;

    for (let j = 0; j < this.state.numPoints - 1; j++) {
      const p = (j + 1) / (this.state.numPoints - 1) * 100;
      const cp = p - (1 / (this.state.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]} `;
    }

    str += (this.state.isNavOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }

  animate = () => {
    if (this.state.isNavOpened) {
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.state.timeStart + this.state.delayPerPath * i)));
      }
    } else {
      for (let j = 0; j < this.path.length; j++) {
        this.path[j].setAttribute('d', this.updatePath(Date.now() - (this.state.timeStart + this.state.delayPerPath * (this.path.length - j - 1))));
      }
    }
  }

  renderLoop = () => {
    this.animate();
    if (Date.now() - this.state.timeStart < this.state.duration + this.state.delayPerPath * (this.path.length - 1) + this.state.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.setState({ isAnimating: false });
    }
  }

  componentDidMount() {
    this.path = this.elem.current.querySelectorAll('path');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isNavOpen !== this.props.isNavOpen) {
      this.toggle();
    }
  }

  render() {
    return (
      <svg className="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none" ref={this.elem}>
        <path className="shape-overlays__path"></path>
      </svg>
    );
  }
}

export default ShapeOverlays;
