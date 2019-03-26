import React, { Component } from 'react';
import cx from 'classnames';

class H1 extends Component {
  state = {
    transitioned: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        transitioned: true,
      })
    }, 1400);
  }

  render() {
    const h1Classes = cx(
      this.props.customClass,
      "common__h1",
      "h1", {
      "is-transitioned": this.state.transitioned,
    });

    return (
      <h1 className={h1Classes}>
        {this.props.children}
      </h1>
    );
  }
}

export default H1;
