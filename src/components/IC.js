import React, { Component } from 'react';
import cx from 'classnames';

class IC extends Component {
  constructor() {
    super();
    this.elem = React.createRef();
  }

  state = {
    isLoaded: false,
  }

  getImage = (src) => {
    const image = new Image();

    image.onload = () => {
      this.setState({
        isLoaded: true,
      });
    }

    image.alt = this.props.alt;
    image.src = src;

    this.elem.current.appendChild(image);
  }

  componentDidMount() {
    this.getImage(this.props.src);
  }

  render() {
    const classes = cx(this.props.customClass, 'image');

    return (
      <div className={classes} ref={this.elem} />
    );
  }
}

export default IC;
