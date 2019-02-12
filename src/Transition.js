import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Transition extends Component {
  render() {
    return (
      <TransitionGroup component="article">
        <CSSTransition
          key={this.props.location}
          classNames="Transition"
          timeout={500}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Transition;
