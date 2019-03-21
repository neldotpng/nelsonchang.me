import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

class Nav extends Component {
  state = {
    isOpen: false,
  }

  onClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const containerClasses = cx("nav__container", {
      "is-open": this.state.isOpen,
    }),
    menuClasses = cx("nav__menu", {
      "is-open": this.state.isOpen,
    });

    return (
      <nav className="nav">
        <div className={containerClasses}>
          <Link to="/" className="nav__link nav__home">N.</Link>

          <div
            role="button"
            onClick={this.onClick}
            className="nav__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Link to="/about" className="nav__link nav__about">About</Link>
        </div>

        <div className={menuClasses}>
          <svg viewBox="0 0 100 100" width="0" className="nav__menuBackground" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
          </svg>

          <div className="nav__menuContainer">
            <ul className="nav__items">
              <li className="nav__item">
                <Link to="/#" className="nav__menuLink">
                  Marquee Sports
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/#" className="nav__menuLink">
                  Odyssey
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/#" className="nav__menuLink">
                  Trunk Club
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/#" className="nav__menuLink">
                  AR/VR
                </Link>
              </li>
            </ul>


          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
