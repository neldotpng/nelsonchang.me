import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ShapeOverlays from './components/ShapeOverlays';
import Nav from './components/Nav';
import TextCanvas from './components/TextCanvas';

class Transition extends Component {
  state = {
    isAnimatedIn: true,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.body.classList.add('is-transitioning');

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        document.body.classList.remove('is-transitioning');
      }, 500);
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isAnimatedIn: false });
    }, 500);
  }

  render() {
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
      <TextCanvas
        key="TextCanvas"
        location={this.props.location} />,
      <TransitionGroup
        component="article"
        key="Transition">
        <CSSTransition
          key={this.props.location}
          in={true}
          classNames="Transition"
          timeout={500}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    ]
  }
}

export default Transition;
