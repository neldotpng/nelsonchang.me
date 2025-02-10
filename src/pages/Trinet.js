import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import VC from '../components/VC';

import video1 from '../assets/videos/trinet/trinet-1.mp4';
import video2 from '../assets/videos/trinet/trinet-2.mp4';
import video3 from '../assets/videos/trinet/trinet-3.mp4';
import video4 from '../assets/videos/trinet/trinet-4.mp4';
import video5 from '../assets/videos/trinet/trinet-5.mp4';

const poster = null;

class Trinet extends Component {
  render() {
    return [
      <section
        key="main"
        className="page marquee caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Trinet</H1>
          <p className="caseStudy__p">
            Trinet approached New York Times with a data-focused Paid Post titled 'How Small
            Businesses Have Handled Another Unprecendented Year.' The data was focused around
            surveys conducted on remote work and its perceived impact on businesses and their
            employees.
          </p>
          <p className="caseStudy__note">
            *Please be advised that since some aspects of this post are hosted on the ad servers of
            the New York Times, some interactions may break if you have an AdBlocker enabled.
          </p>
          <div className="caseStudy__cta">
            <Button href="#">View article</Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Built using <span className="caseStudy__emphasis">Pug.js</span> for the templating
            language, <span className="caseStudy__emphasis">SCSS</span> for styling,{' '}
            <span className="caseStudy__emphasis">vanilla ES6 JavaScript</span> for the data
            visualization (given the simpler designs of the data visualizations, a detailed data
            visualization library felt like overkill), and lastly{' '}
            <span className="caseStudy__emphasis">GSAP</span> for animation tweening.
          </p>
        </aside>
        <div className="caseStudy__images">
          <VC
            customClass="caseStudy__video"
            src={video1}
            poster={poster}>
            Trinet intro animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video2}
            poster={poster}>
            Trinet scrolling copy sample
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video3}
            poster={poster}>
            Trinet bar graph entry animation and hover states
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video4}
            poster={poster}>
            Trinet section header animation and circle data entry animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video5}
            poster={poster}>
            Trinet alternate data set animation on click
          </VC>
        </div>
      </section>,
      <div
        key="Cta"
        className="caseStudy__next">
        <Link
          to="/cartier"
          className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Cartier</span>
        </Link>
      </div>,
    ];
  }
}

export default Trinet;
