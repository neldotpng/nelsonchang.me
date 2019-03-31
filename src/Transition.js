import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import cx from 'classnames';

import { isMobileDevice, isSafari, isChrome } from './functions/browser-detect';

import ShapeOverlays from './components/ShapeOverlays';
import Nav from './components/Nav';
import TextCanvas from './components/TextCanvas';

class Transition extends Component {
  state = {
    isAnimatedIn: true,
    // isMobile: isMobileDevice(),
    // isSafari: isSafari(),
    // isChrome: isChrome(),
    // isCaseStudy: false,
    // isHomePage: false,
    bgText: '',
  }

  checkPage = (location) => {
    if (location === '/') {
      this.setState({
        isHomePage: true,
        isCaseStudy: false,
      });
    } else if (location === '/about') {
      this.setState({
        isHomePage: false,
        isCaseStudy: false,
      });
    } else {
      this.setState({
        isHomePage: false,
        isCaseStudy: true,
      });
    }
  }

  getBgText = (str) => {
    setTimeout(() => {
      this.setState({ bgText: str });
    }, 500);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.body.classList.add('no-scroll');

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
        document.body.classList.remove('no-scroll');
        this.checkPage(this.props.location);
      }, 550);
    }
  }

  componentDidMount() {
    this.wrapper = document.getElementById('Wrapper');
    this.checkPage(this.props.location);

    setTimeout(() => {
      this.setState({ isAnimatedIn: false });
    }, 500);
  }

  render() {
    const wrapper = cx("wrapper", {
      // "is-homepage": this.state.isHomePage,
      // "is-mobile-or-safari": this.state.isMobile || this.state.isSafari,
      // "is-case-study": this.state.isCaseStudy,
      // "is-chrome": this.state.isChrome,
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
          getBgText={this.getBgText} />
        <TransitionGroup component="article">
          <CSSTransition
            key={this.props.location}
            in={true}
            classNames="Transition"
            timeout={500}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>
    ]
  }
}

export default Transition;
