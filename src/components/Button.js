import React, { Component } from 'react';
import cx from 'classnames';

class Button extends Component {
  render() {
    const cta = this.props.href != undefined ?
      <a
        href={this.props.href}
        className="button__link"
        target="_blank"
        rel="noopener noreferrer">
        {this.props.children}
      </a> :
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
