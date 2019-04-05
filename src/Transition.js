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
    offset: 9999,
    notAtTopOrBottom: false,
  }

  checkPage = (location) => {
    if (location === '/') {
      this.setState({
        isHomePage: true,
        isCaseStudy: false,
        offset: 9999,
      });
    } else if (location === '/about') {
      this.setState({
        isHomePage: false,
        isCaseStudy: false,
        offset: 9999,
      });
    } else {
      setTimeout(() => {
        this.setState({
          isHomePage: false,
          isCaseStudy: true,
          offset: -175,
        });
      }, 900);
    }
  }

  getBgText = (str) => {
    setTimeout(() => {
      this.setState({ bgText: str });
    }, 500);
  }

  onBottomEnter = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({
        animateInOut: true,
        notAtTopOrBottom: false,
      });
      this.ref.current.onScrollToBottom();
      document.body.classList.add('is-showing-next');

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  }

  onBottomExit = () => {
    if (this.props.location !== '/' && this.props.location !== '/about') {
      this.setState({
        animateInOut: true,
        notAtTopOrBottom: true,
      });
      this.ref.current.onScrollUp();
      document.body.classList.remove('is-showing-next');

      setTimeout(() => {
        this.setState({ animateInOut: false });
      }, 500);
    }
  }

  onTopEnter = () => {
    this.setState({ notAtTopOrBottom: false });
  }

  onTopExit = () => {
    this.setState({ notAtTopOrBottom: true });
  }

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
    }, 1200);
  }

  render() {
    const wrapper = cx("wrapper", {
      "should-animate-in-out": this.state.animateInOut,
      "has-background": this.state.notAtTopOrBottom,
    });

    const logo = cx("transition__logo", {
      "should-animate-out": !this.state.isAnimatedIn,
    });

    return [
      <ShapeOverlays
        customClass={"transitionOverlay"}
        isAnimatedIn={this.state.isAnimatedIn}
        duration={800}
        key="Overlay"
        startOpen={true}>
        <svg className={logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="OVERLAP_3_"><path id="XMLID_539_" className="st0" d="M0-.1h100V7H0z"/><path id="XMLID_538_" className="st0" d="M13.3 13.1H100v7.1H13.3z"/><path id="XMLID_537_" className="st0" d="M0 79.4h86.7v7.1H0z"/><path id="XMLID_536_" className="st0" d="M0 92.6h100v7.1H0z"/><path id="XMLID_535_" className="st0" d="M13.3 23.3V13.1h7.2v10.2"/><path id="XMLID_534_" className="st0" d="M7.2 49.9v23.4H0V49.9"/><path id="XMLID_533_" className="st0" d="M0 23.3V-.1h7.2v23.4"/><path id="XMLID_532_" className="st0" d="M20.5 49.9V60h-7.2V49.9"/><path id="XMLID_531_" className="st0" d="M100 76.5v23.4h-7.1V76.5"/><path id="XMLID_530_" className="st0" d="M92.9 49.7V26.4h7.1v23.3"/><path id="XMLID_529_" className="st0" d="M86.8 76.5v10h-7.2v-10"/><path id="XMLID_528_" className="st0" d="M79.6 49.7V39.6h7.2v10.1"/><g id="_x34__3_"><path id="XMLID_19_" className="st0" d="M0 66.1h100v7.1H0z"/></g><g id="_x33__3_"><path id="XMLID_17_" className="st0" d="M13.3 52.9H100V60H13.3z"/></g><g id="_x32__3_"><path id="XMLID_15_" className="st0" d="M0 39.6h86.7v7.1H0z"/></g><g id="_x31__3_"><path id="XMLID_13_" className="st0" d="M0 26.4h100v7.1H0z"/></g></g></svg>
      </ShapeOverlays>,
      <Nav
        key="Nav"
        location={this.props.location} />,
      <Waypoint
        key="Top"
        onEnter={this.onTopEnter}
        onLeave={this.onTopExit}
        topOffset={-25} />,
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
            timeout={900}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>,
      <Waypoint
        key="Bottom"
        onEnter={this.onBottomEnter}
        onLeave={this.onBottomExit}
        bottomOffset={this.state.offset} />
    ]
  }
}

export default Transition;
