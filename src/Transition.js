import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Nav from './components/shared/Nav';
import TextCanvas from './components/shared/TextCanvas';

class Transition extends Component {
  render() {
    return [
      <Nav key="Nav" />,
      <TextCanvas key="TextCanvas" />,
      <TransitionGroup
        component="article"
        key="Transition">
        <CSSTransition
          key={this.props.location}
          classNames="Transition"
          timeout={500}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    ]
  }
}

export default Transition;
