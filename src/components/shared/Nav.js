import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__home">N.</Link>

          <div className="nav__menu">
            <div role="button" className="nav__menuButton">
              <span className="nav__menuLabel">Menu</span>
              <div className="nav__hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
