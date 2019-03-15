import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__home">N.</Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
