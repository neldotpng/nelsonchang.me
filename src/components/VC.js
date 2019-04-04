import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import cx from 'classnames';

import { isMobileDevice } from '../functions/browser-detect';

class VC extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  state = {
    isMobile: isMobileDevice(),
    isVisible: false,
    autoplay: true,
    autoplayError: false,
  }

  onEnter = () => {
    this.setState({
      isVisible: true,
      autoplay: true,
    });

    if (this.ref.current.paused && !this.state.isMobile) {
      this.playVideo();
    }
  }

  playVideo = () => {
    try {
      this.ref.current.play();
    } catch(err) {
      this.setState({ autoplayError: true });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 900);
  }

  render() {
    const classes = cx(this.props.customClass, 'video', {
      'is-visible': this.state.isVisible,
    });

    return (
      <Waypoint
        scrollableAncestor={window}
        onEnter={this.onEnter}
        bottomOffset="200px">
        <div className={classes}>
          <video
            autoPlay={!this.state.isMobile && this.state.autoplay}
            controls={this.state.isMobile || this.state.autoplayError}
            poster={this.props.poster}
            loop
            muted
            preload="auto"
            ref={this.ref}>
            <source src={this.props.src} />
            {this.props.children}
          </video>
        </div>
      </Waypoint>
    );
  }
}

export default VC;
