import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { isMobileDevice } from '../functions/browser-detect';

import H1 from '../components/H1';
import IC from '../components/IC';

class EverythingElse extends Component {
  render() {
    return [
      <section key="main" className="trunkclub caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">
            Everything Else
          </H1>
          <p className="caseStudy__p">
            At both work and in my free time, I’ve had the opportunity to explore a great variety of new technologies, as well as experiment with old frameworks that I’m less familiar with. On this page you’ll find some things I’ve worked on that wouldn’t quite be labeled as full blown projects, but that I feel are worth sharing nonetheless.
          </p>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">
            Details
          </h2>
          <p className="caseStudy__details">
            Experiments with <span className="caseStudy__emphasis">USDZ</span>, <span className="caseStudy__emphasis">HTML Canvas</span>, <span className="caseStudy__emphasis">React Native</span>
          </p>
        </aside>
        <div className="caseStudy__images">
        </div>
      </section>,
      <div key="cta" className="caseStudy__next">
        <Link to="/marquee-sports" className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Marquee Sports</span>
        </Link>
      </div>
    ];
  }
}

export default EverythingElse;
