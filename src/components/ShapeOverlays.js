import React, { Component } from 'react';
import cx from 'classnames';

class ShapeOverlays extends Component {
  constructor() {
    super();
    this.elem = React.createRef();
  }

  state = {
    isAnimatedIn: false,
    numPoints: 4,
    delayPointsArray: [],
    delayPointsMax: 70,
    delayPerPath: 40,
    timeStart: Date.now(),
  }

  toggle = () => {
    const range = Math.random() * Math.PI * 2;
    const delayPointsArray = [];

    for (var i = 0; i < this.state.numPoints; i++) {
      const radian = (i / (this.state.numPoints - 1)) * Math.PI * 2;
      delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.state.delayPointsMax;
    }

    this.setState({ delayPointsArray });

    if (this.state.isAnimatedIn === false) {
      this.open();
    } else {
      this.close();
    }
  }

  open = () => {
    this.setState({
      isAnimatedIn: true,
      timeStart: Date.now(),
    }, this.renderLoop);
  }

  close = () => {
    this.setState({
      isAnimatedIn: false,
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
          Math.max(time - this.state.delayPointsArray[i], 0) / this.props.duration, 1)
        ) * 100;
    }

    let str = '';
    str += (this.state.isAnimatedIn) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;

    for (let j = 0; j < this.state.numPoints - 1; j++) {
      const p = (j + 1) / (this.state.numPoints - 1) * 100;
      const cp = p - (1 / (this.state.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]} `;
    }

    str += (this.state.isAnimatedIn) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }

  animate = () => {
    if (this.state.isAnimatedIn) {
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
    if (Date.now() - this.state.timeStart < this.props.duration + this.state.delayPerPath * (this.path.length - 1) + this.state.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
  }

  componentDidMount() {
    this.path = this.elem.current.querySelectorAll('path');

    if (this.props.startOpen) {
      this.path[0].setAttribute('d', 'M 0 0 V 100 C 25 100 25 100 50 100 C 75 100 75 100 100 100 V 0 H 0');
      this.setState({ isAnimatedIn: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAnimatedIn !== this.props.isAnimatedIn) {
      this.toggle();
    }
  }

  render() {
    return (
      <svg
        className={cx(
          this.props.customClass,
          "shape-overlays"
        )}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref={this.elem}>
        <path className="shape-overlays__path"></path>
      </svg>
    );
  }
}

export default ShapeOverlays;
