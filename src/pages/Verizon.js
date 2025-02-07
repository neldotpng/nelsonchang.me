import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

import video1 from '../assets/videos/verizon/verizon-1.mp4';
import video2 from '../assets/videos/verizon/verizon-2.mp4';
import video3 from '../assets/videos/verizon/verizon-3.mp4';
import video4 from '../assets/videos/verizon/verizon-4.mp4';
import video5 from '../assets/videos/verizon/verizon-5.mp4';
// import poster from '../assets/videos/verizon/trunkclub-poster.jpg';
import image1 from '../assets/images/verizon/verizon-1.png';
import image2 from '../assets/images/verizon/verizon-2.png';
import image3 from '../assets/images/verizon/verizon-3.png';

const poster = null;

class Verizon extends Component {
  render() {
    return [
      <section
        key="main"
        className="page marquee caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Verizon</H1>
          <p className="caseStudy__p">
            Built for Verizon&rsquo;s 5G Experience ad campaign, the following two Paid Posts were
            Part 2 and Part 3, respectively. New York Times contracted with an external creative
            developer for 'The Evolution of Speed' to create the hoverable, large-type section
            headers which were then integrated into the build by myself alongside the additional
            design elements and subcopy. Both of the intro headers for 'The Evolution of Speed' and
            'Eclipse' were built using HTML canvas, and natural scrolling was preserved throughout
            both experiences to make for a smooth read.
          </p>
          <p className="caseStudy__note">
            *Please be advised that since some aspects of these posts are hosted on the ad servers
            of the New York Times, some interactions may break if you have an AdBlocker enabled.
          </p>
          <div className="caseStudy__cta">
            <Button href="https://www.nytimes.com/paidpost/verizon-5g/the-evolution-of-speed.html">
              View 'The Evolution of Speed'
            </Button>
            <Button href="https://www.nytimes.com/paidpost/verizon-5g/when-headlines-come-to-life.html">
              View 'Eclipse'
            </Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Built using <span className="caseStudy__emphasis">Pug.js</span> for the templating
            language, <span className="caseStudy__emphasis">SCSS</span> for styling, and{' '}
            <span className="caseStudy__emphasis">vanilla ES6 JavaScript</span> for all interactions
            alongside <span className="caseStudy__emphasis">GSAP</span> for timing and easing.
          </p>
        </aside>
        <div className="caseStudy__images">
          <VC
            customClass="caseStudy__video"
            src={video1}
            poster={poster}>
            Verizon 'The Evolution of Speed' intro scroll animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video2}
            poster={poster}>
            Verizon 'The Evolution of Speed' timeline scroll animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video3}
            poster={poster}>
            Verizon 'The Evolution of Speed' two column sticky scroll animation
          </VC>
          <IC
            customClass="caseStudy__image"
            src={image1}
            alt="Verizon 'The Evolution of Speed' section header"
            waypoint={true}
          />
          <IC
            customClass="caseStudy__image"
            src={image2}
            alt="Verizon 'The Evolution of Speed' copy section"
            waypoint={true}
          />
          <VC
            customClass="caseStudy__video"
            src={video4}
            poster={poster}>
            Verizon 'Eclipse' intro scroll animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video5}
            poster={poster}>
            Verizon 'Eclipse' section header scroll animation
          </VC>
          <IC
            customClass="caseStudy__image"
            src={image3}
            alt="Verizon 'Eclipse' sample copy section"
            waypoint={true}
          />
        </div>
      </section>,
      <div
        key="Cta"
        className="caseStudy__next">
        <Link
          to="/trinet"
          className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Trinet</span>
        </Link>
      </div>,
    ];
  }
}

export default Verizon;
