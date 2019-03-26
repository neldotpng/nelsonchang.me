import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ShapeOverlays from './components/ShapeOverlays';
import Nav from './components/Nav';
import TextCanvas from './components/TextCanvas';

class Transition extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.body.classList.add('is-transitioning');

      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.classList.remove('is-transitioning');
      }, 800);
    }
  }

  render() {
    return [
      <ShapeOverlays
        key="Overlay"
        customClass={"transitionOverlay"}
        transition={this.props.location}
        duration={800} />,
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
          timeout={{
            enter: 1600,
            exit: 800,
          }}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    ]
  }
}

export default Transition;
