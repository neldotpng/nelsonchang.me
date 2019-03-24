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
          <Link to="/" className="nav__link nav__home">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="OVERLAP_3_"><path id="XMLID_539_" class="st0" d="M0-.1h100V7H0z"/><path id="XMLID_538_" class="st0" d="M13.3 13.1H100v7.1H13.3z"/><path id="XMLID_537_" class="st0" d="M0 79.4h86.7v7.1H0z"/><path id="XMLID_536_" class="st0" d="M0 92.6h100v7.1H0z"/><path id="XMLID_535_" class="st0" d="M13.3 23.3V13.1h7.2v10.2"/><path id="XMLID_534_" class="st0" d="M7.2 49.9v23.4H0V49.9"/><path id="XMLID_533_" class="st0" d="M0 23.3V-.1h7.2v23.4"/><path id="XMLID_532_" class="st0" d="M20.5 49.9V60h-7.2V49.9"/><path id="XMLID_531_" class="st0" d="M100 76.5v23.4h-7.1V76.5"/><path id="XMLID_530_" class="st0" d="M92.9 49.7V26.4h7.1v23.3"/><path id="XMLID_529_" class="st0" d="M86.8 76.5v10h-7.2v-10"/><path id="XMLID_528_" class="st0" d="M79.6 49.7V39.6h7.2v10.1"/><g id="_x34__3_"><path id="XMLID_19_" class="st0" d="M0 66.1h100v7.1H0z"/></g><g id="_x33__3_"><path id="XMLID_17_" class="st0" d="M13.3 52.9H100V60H13.3z"/></g><g id="_x32__3_"><path id="XMLID_15_" class="st0" d="M0 39.6h86.7v7.1H0z"/></g><g id="_x31__3_"><path id="XMLID_13_" class="st0" d="M0 26.4h100v7.1H0z"/></g></g></svg>
          </Link>

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
          <div className="nav__menuContainer">
            <ul className="nav__items">
              <li className="nav__item">
                <Link to="/marquee-sports" className="nav__menuLink">
                  Marquee Sports
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/odyssey" className="nav__menuLink">
                  Odyssey
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/trunk-club" className="nav__menuLink">
                  Trunk Club
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/ar-vr" className="nav__menuLink">
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
