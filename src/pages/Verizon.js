import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

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
            Part 2 and Part 3, respectively. New York Times contracted with an external developer
            for 'The Evolution of Speed' to create the large-type section headers which were then
            integrated into the build by myself alongside the additional design elements and
            subcopy.
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
            Lorem ipsum, dolor sit amet <span className="caseStudy__emphasis">consectetur</span>{' '}
            adipisicing elit. Voluptatem, aspernatur earum. Explicabo minima provident est inventore
            voluptatem! Nesciunt tempore, sit consectetur officiis eos fugit optio culpa molestias
            nihil voluptates voluptatem?
          </p>
        </aside>
        <div className="caseStudy__images"></div>
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
