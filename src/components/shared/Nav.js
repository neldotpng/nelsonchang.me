import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__link nav__home">N.</Link>

          <div role="button" className="nav__menu">
            <div className="nav__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <Link to="/about" className="nav__link nav__about">About</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
