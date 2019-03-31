import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Waypoint } from 'react-waypoint';
import cx from 'classnames';

import ShapeOverlays from './components/ShapeOverlays';
import Nav from './components/Nav';
import TextCanvas from './components/TextCanvas';

class Transition extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  state = {
    isAnimatedIn: true,
    animateInOut: false,
    bgText: '',
    offset: 0,
  }

  checkPage = (location) => {
    if (location === '/') {
      this.setState({
        isHomePage: true,
        isCaseStudy: false,
        offset: 1,
      });
    } else if (location === '/about') {
      this.setState({
        isHomePage: false,
        isCaseStudy: false,
        offset: 1,
      });
    } else {
      this.setState({
        isHomePage: false,
        isCaseStudy: true,
        offset: -250,
      });
    }
  }

  getBgText = (str) => {
    setTimeout(() => {
      this.setState({ bgText: str });
    }, 500);
  }

  onScrollToBottom = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({ animateInOut: true });
      this.ref.current.onScrollToBottom();

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  }

  onScrollUp = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({ animateInOut: true });
      this.ref.current.onScrollUp();

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.documentElement.classList.add('no-scroll');

      setTimeout(() => {
        document.documentElement.classList.remove('no-scroll');
        this.checkPage(this.props.location);
      }, 550);
    }
  }

  componentDidMount() {
    this.checkPage(this.props.location);

    setTimeout(() => {
      this.setState({ isAnimatedIn: false });
    }, 500);
  }

  render() {
    const wrapper = cx("wrapper", {
      "should-animate-in-out": this.state.animateInOut,
    });

    return [
      <ShapeOverlays
        customClass={"transitionOverlay"}
        isAnimatedIn={this.state.isAnimatedIn}
        duration={500}
        key="Overlay"
        startOpen={true} />,
      <Nav
        key="Nav"
        location={this.props.location} />,
      <div
        id="Wrapper"
        key="Wrapper"
        className={wrapper}>
        <div className="wrapper__bg">
          <div className="wrapper__bgText">
            {this.state.bgText}
          </div>
        </div>
        <TextCanvas
          location={this.props.location}
          getBgText={this.getBgText}
          ref={this.ref} />
        <TransitionGroup component="article">
          <CSSTransition
            key={this.props.location}
            in={true}
            classNames="Transition"
            timeout={500}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>,
      <Waypoint
        key="Waypoint"
        onEnter={this.onScrollToBottom}
        onLeave={this.onScrollUp}
        bottomOffset={this.state.offset}>
      </Waypoint>
    ]
  }
}

export default Transition;
