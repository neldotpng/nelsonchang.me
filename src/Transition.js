import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ParticleCanvas from './components/ParticleCanvas/ParticleCanvas';

class Transition extends Component {
  render() {
    return [
      <ParticleCanvas key="ParticleCanvas" />,
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
