import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

class Trinet extends Component {
  render() {
    return [
      <section
        key="main"
        className="page marquee caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Trinet</H1>
          <p className="caseStudy__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio delectus, harum velit
            illo, totam ipsa, rerum quo adipisci odit ut nemo eum iste voluptatibus tenetur hic
            numquam. Praesentium, excepturi aliquam.
          </p>
          <div className="caseStudy__cta">
            <Button href="#">View site</Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Lorem ipsum, dolor sit amet <span class="caseStudy__emphasis">consectetur</span>{' '}
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
