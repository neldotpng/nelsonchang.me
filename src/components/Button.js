import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

class Button extends Component {
  render() {
    const cta = this.props.to != undefined ?
      <Link
        to={this.props.to}
        className="button__link">
        {this.props.children}
      </Link> :
      <div className="button__link">
        {this.props.children}
      </div>;

    const buttonClass = cx("button", this.props.customClass);

    return (
      <div className={buttonClass} role="button">
        <span className="button__top"></span>
        <span className="button__right"></span>

        { cta }

        <span className="button__bottom"></span>
        <span className="button__left"></span>
      </div>
    );
  }
}

export default Button;
