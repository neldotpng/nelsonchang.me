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
    bgOffset: -25,
    ctaOffset: 9999,
    notAtTopOrBottom: false,
    hasBackground: false,
  };

  checkPage = (location) => {
    if (location === '/') {
      this.setState({
        isHomePage: true,
        isCaseStudy: false,
        bgOffset: -9999,
        ctaOffset: 9999,
      });
    } else if (location === '/about') {
      this.setState({
        isHomePage: false,
        isCaseStudy: false,
        bgOffset: -25,
        ctaOffset: 9999,
      });
    } else {
      setTimeout(() => {
        this.setState({
          isHomePage: false,
          isCaseStudy: true,
          bgOffset: -25,
          ctaOffset: -175,
        });
      }, 900);
    }
  };

  getBgText = (str) => {
    setTimeout(() => {
      this.setState({ bgText: str });
    }, 500);
  };

  onBottomEnter = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({
        animateInOut: true,
        notAtTopOrBottom: false,
        hasBackground: false,
      });
      this.ref.current.onScrollToBottom();
      document.body.classList.add('is-showing-next');

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  };

  onBottomExit = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({
        animateInOut: true,
        notAtTopOrBottom: true,
        hasBackground: true,
      });
      this.ref.current.onScrollUp();
      document.body.classList.remove('is-showing-next');

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  };

  removeBackground = () => {
    this.setState({
      hasBackground: false,
      notAtTopOrBottom: false,
    });
  };

  addBackground = () => {
    this.setState({
      hasBackground: true,
      notAtTopOrBottom: true,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.body.classList.add('no-scroll');
      document.body.classList.remove('is-showing-next');

      setTimeout(() => {
        document.body.classList.remove('no-scroll');
        this.checkPage(this.props.location);
        this.setState({ notAtTopOrBottom: false });
      }, 700);
    }
  }

  componentDidMount() {
    this.checkPage(this.props.location);
    document.body.classList.add('no-scroll');

    setTimeout(() => {
      this.setState({ isAnimatedIn: false });
    }, 400);

    setTimeout(() => {
      document.body.classList.remove('no-scroll');
    }, 2000);
  }

  render() {
    const wrapper = cx('wrapper', {
      'should-animate-in-out': this.state.animateInOut,
      'has-background': this.state.notAtTopOrBottom && this.state.hasBackground,
    });

    const logo = cx('transition__logo', {
      'should-animate-out': !this.state.isAnimatedIn,
    });

    return [
      <ShapeOverlays
        customClass={'transitionOverlay'}
        isAnimatedIn={this.state.isAnimatedIn}
        duration={800}
        key="Overlay"
        startOpen={true}>
        <svg
          className={logo}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0h100v7.426H7.426v58.508h73.576V60.04H12.15V13.32H100v7.426H19.576v5.228H100V100H0v-7.426h92.574V33.4H19.576v5.894h68.852V86.68H0v-7.426h81.002V73.36H0V0zm81.002 52.614V46.72H19.576v5.894h61.426z"
            fill="#F9AD26"
          />
        </svg>
      </ShapeOverlays>,
      <Nav
        key="Nav"
        location={this.props.location}
        removeBackground={this.removeBackground}
      />,
      <Waypoint
        key="Top"
        onEnter={this.removeBackground}
        onLeave={this.addBackground}
        topOffset={this.state.bgOffset}
      />,
      <div
        id="Wrapper"
        key="Wrapper"
        className={wrapper}>
        <div className="wrapper__bg">
          <div className="wrapper__bgText">{this.state.bgText}</div>
        </div>
        <TextCanvas
          location={this.props.location}
          getBgText={this.getBgText}
          ref={this.ref}
          setHasBackground={(bool) => this.setState({ hasBackground: bool })}
          notAtTopOrBottom={this.state.notAtTopOrBottom}
        />
        <TransitionGroup component="article">
          <CSSTransition
            key={this.props.location}
            in={true}
            classNames="Transition"
            timeout={900}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>,
      <Waypoint
        key="Bottom"
        onEnter={this.onBottomEnter}
        onLeave={this.onBottomExit}
        bottomOffset={this.state.ctaOffset}
      />,
    ];
  }
}

export default Transition;
