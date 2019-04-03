import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

import video from '../assets/images/mse/mse-video.mp4';
import poster from '../assets/images/mse/mse-poster.jpg';
import image1 from '../assets/images/mse/mse-comp-1.jpg';
import image2 from '../assets/images/mse/mse-comp-2.jpg';
import image3 from '../assets/images/mse/mse-comp-3.jpg';
import image4 from '../assets/images/mse/mse-comp-4.png';
import image5 from '../assets/images/mse/mse-comp-5.jpg';

class Marquee extends Component {
  render() {
    return [
      <section key="main" className="page marquee caseStudy">
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
          <VC
            customClass="caseStudy__video"
            src={video}
            poster={poster}>
            Video showcasing the intro animation.
          </VC>
          <IC
            customClass="caseStudy__image"
            src={image1}
            alt="Marquee homepage sections"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image2}
            alt="Marquee venues page example"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image3}
            alt="Marquee concerts page"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image4}
            alt="Marquee site menu"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image5}
            alt="Marquee general venues page"
            waypoint={true} />
        </div>
      </section>,
      <div key="Cta" className="caseStudy__next">
        <Link to="/odyssey" className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Odyssey</span>
        </Link>
      </div>
    ];
  }
}

export default Marquee;
