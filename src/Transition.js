import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Nav from './components/Nav';
import TextCanvas from './components/TextCanvas';

class Transition extends Component {
  render() {
    return [
      <Nav key="Nav" location={this.props.location} />,
      <TextCanvas key="TextCanvas" location={this.props.location} />,
      <TransitionGroup
        component="article"
        key="Transition">
        <CSSTransition
          key={this.props.location}
          classNames="Transition"
          timeout={2000}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    ]
  }
}

export default Transition;
