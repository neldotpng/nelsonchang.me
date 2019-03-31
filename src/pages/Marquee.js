import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import H1 from '../components/H1';
import IC from '../components/IC';

import image1 from '../assets/images/mse/mse-comp-1.png';
import image2 from '../assets/images/mse/mse-comp-2.jpg';
import image3 from '../assets/images/mse/mse-comp-3.jpg';
import image4 from '../assets/images/mse/mse-comp-4.jpg';

class Marquee extends Component {
  render() {
    return (
      <section className="marquee caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">
            Marquee Sports Group
          </H1>
          <p className="caseStudy__p">
            At Perficient Digital Labs, I was responsible for the front-end development of Marquee Sports Group’s new marketing site. The website was designed to showcase the aspects of Marquee’s unique offerings and was developed to scale after the code was handed off. Development followed a structure of creating reusable components that could be distributed across new pages that would be later added to the site.
          </p>
          <div className="caseStudy__cta">
            <a href="https://www.marqueesportsgroup.com/" target="_blank" rel="noopener noreferrer" className="caseStudy__link">
              View site
            </a>
            .
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">
            Details
          </h2>
          <p className="caseStudy__details">
            Developed with <span className="caseStudy__emphasis">React</span> on the front-end and <span className="caseStudy__emphasis">GraphQL / Contentful</span> on the back-end. <span className="caseStudy__emphasis">GSAP</span> was flexed on the front-end for certain animations, but <span className="caseStudy__emphasis">CSS3</span> was used to handle a majority of the heavy labor for performance. The project also showcased <span className="caseStudy__emphasis">A-Frame</span> for 360&deg; tour imagery.
          </p>
        </aside>
        <div className="caseStudy__images">
          <IC customClass="caseStudy__image" src={image1} alt="" />
          <IC customClass="caseStudy__image" src={image2} alt="" />
          <IC customClass="caseStudy__image" src={image3} alt="" />
          <IC customClass="caseStudy__image" src={image4} alt="" />
        </div>
        <div className="caseStudy__next">
          <Link to="/odyssey" className="caseStudy__nextCta">
            Next | <span>Odyssey</span>
          </Link>
        </div>
      </section>
    );
  }
}

export default Marquee;
