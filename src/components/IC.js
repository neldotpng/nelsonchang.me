import React, { Component } from 'react';
import cx from 'classnames';

import { Waypoint } from 'react-waypoint';

class IC extends Component {
  constructor() {
    super();
    this.elem = React.createRef();
  }

  state = {
    isLoaded: false,
    isVisible: false,
  }

  getImage = (src) => {
    const image = new Image();

    image.alt = this.props.alt;
    image.src = src;

    image.onload = () => {
      this.setState({
        isLoaded: true,
      });
    }

    this.elem.current.appendChild(image);
  }

  onEnter = () => {
    if (this.props.waypoint) {
      this.setState({
        isVisible: true,
      });
    }
  }

  componentDidMount() {
    this.getImage(this.props.src);
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 900);
  }

  render() {
    const classes = cx(this.props.customClass, 'image', {
      'is-visible': this.state.isLoaded && this.state.isVisible,
    });

    return (
      <Waypoint
        scrollableAncestor={window}
        onEnter={this.onEnter}
        bottomOffset="200px">
        <div className={classes} ref={this.elem} />
      </Waypoint>
    );
  }
}

export default IC;
