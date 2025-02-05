import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';
import cx from 'classnames';

import ShapeOverlays from './ShapeOverlays';

class Nav extends Component {
  state = {
    isOpen: false,
    isAnimating: false,
  };

  toggleMenu = () => {
    if (!this.state.isAnimating) {
      this.setState(
        {
          isOpen: !this.state.isOpen,
          isAnimating: true,
        },
        () => {
          if (this.state.isOpen) {
            document.body.classList.add('menu-is-open');
            setTimeout(() => {
              TweenMax.staggerTo(
                '.nav__menuLink',
                0.25,
                {
                  opacity: 1,
                  y: 0,
                },
                0.05
              );
            }, 200);
          } else {
            document.body.classList.remove('menu-is-open');
            TweenMax.staggerTo(
              '.nav__menuLink',
              0.25,
              {
                opacity: 0,
                y: '-=10',
              },
              0.05
            );
          }

          setTimeout(() => {
            this.setState({
              isAnimating: false,
            });
          }, 400);
        }
      );
    }
  };

  closeMenu = () => {
    this.setState(
      {
        isOpen: false,
      },
      () => {
        document.body.classList.remove('menu-is-open');
        this.props.removeBackground();

        TweenMax.staggerTo(
          '.nav__menuLink',
          0.25,
          {
            opacity: 0,
            y: '-=15',
          },
          0.05
        );
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      document.body.classList.remove('menu-is-open');
      setTimeout(() => {
        this.closeMenu();
      }, 200);
    }
  }

  render() {
    const containerClasses = cx('nav__container', {
        'is-open': this.state.isOpen,
      }),
      menuClasses = cx('nav__menu', {
        'is-open': this.state.isOpen,
      });

    const location = this.props.location.replace(/\//g, '');

    return [
      <ShapeOverlays
        key="Background"
        isAnimatedIn={this.state.isOpen}
        duration={450}
      />,
      <div
        key="Navbar"
        className="nav">
        <div className={containerClasses}>
          <Link
            to="/"
            className="nav__link nav__home">
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0h100v7.426H7.426v58.508h73.576V60.04H12.15V13.32H100v7.426H19.576v5.228H100V100H0v-7.426h92.574V33.4H19.576v5.894h68.852V86.68H0v-7.426h81.002V73.36H0V0zm81.002 52.614V46.72H19.576v5.894h61.426z"
              />
            </svg>
          </Link>

          <div
            className="nav__burgerBox"
            onClick={this.toggleMenu}
            role="button">
            <span>Menu</span>
            <div className="nav__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <Link
            to="/about"
            className={`nav__link nav__about nav--${location}`}>
            About
          </Link>
        </div>

        <nav className={menuClasses}>
          <div className="nav__menuContainer">
            <ul className={`nav__items nav--${location}`}>
              <li className="nav__item">
                <Link
                  to="/verizon"
                  className="nav__menuLink">
                  Verizon 5G
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/trinet"
                  className="nav__menuLink">
                  Trinet
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/cartier"
                  className="nav__menuLink">
                  Cartier
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/marquee-sports"
                  className="nav__menuLink">
                  Marquee Sports
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/odyssey"
                  className="nav__menuLink">
                  Odyssey
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/etc"
                  className="nav__menuLink">
                  Everything Else
                </Link>
              </li>
            </ul>

            <p className="nav__menuCta">
              *For more work samples, email me at{' '}
              <a
                href="mailto:nelsonschang@gmail.com"
                className="nav__menuEmail">
                nelsonschang@gmail.com
              </a>
              .
            </p>
          </div>
        </nav>
      </div>,
    ];
  }
}

export default Nav;
