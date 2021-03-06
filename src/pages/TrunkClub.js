import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

import video from '../assets/images/trunkclub/trunkclub-video.mp4';
import poster from '../assets/images/trunkclub/trunkclub-poster.jpg';
import image1 from '../assets/images/trunkclub/trunkclub-comp1.jpg';
import image2 from '../assets/images/trunkclub/trunkclub-comp2.jpg';
import image3 from '../assets/images/trunkclub/trunkclub-comp3.jpg';
import image4 from '../assets/images/trunkclub/trunkclub-comp4.jpg';
import image5 from '../assets/images/trunkclub/trunkclub-comp5.jpg';

class TrunkClub extends Component {
  render() {
    return [
      <section key="main" className="page trunkclub caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">
            Trunk Club
          </H1>
          <p className="caseStudy__p">
            At Trunk Club, I was brought on as the sole front-end developer for the marketing site. In my tenure, I completed two full homepage redesigns. This included the main landing page, the women’s landing, and the men’s landing. A number of other pages and experiences were created or redesigned in the process, including a brand new press hub and a gift cards purchasing flow. (Note: Trunk Club has gone through yet another redesign and much of my work is no longer on the live site.)
          </p>
          <div className="caseStudy__cta">
            <Button href="https://www.trunkclub.com/">
              Visit site
            </Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">
            Details
          </h2>
          <p className="caseStudy__details">
            Developed with vanilla <span className="caseStudy__emphasis">HTML5</span>, <span className="caseStudy__emphasis">SCSS</span>, and <span className="caseStudy__emphasis">CoffeeScript</span> on the front-end. The site was backed by <span className="caseStudy__emphasis">Statamic</span> for the CMS.
          </p>
        </aside>
        <div className="caseStudy__images">
          <VC
            customClass="caseStudy__video"
            src={video}
            poster={poster}>
            Trunk Club homepage animations and transitions
          </VC>
          <IC
            customClass="caseStudy__image"
            src={image1}
            alt="Trunk Club 2016 homepage"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image2}
            alt="Trunk Club 2017 gift cards landing page"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image3}
            alt="Trunk Club 2017 homepage"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image4}
            alt="Trunk Club 2017 women's homepage header"
            waypoint={true} />
          <IC
            customClass="caseStudy__image"
            src={image5}
            alt="Trunk Club 2017 women's homepage pricing section"
            waypoint={true} />
        </div>
      </section>,
      <div key="cta" className="caseStudy__next">
        <Link to="/etc" className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Everything Else</span>
        </Link>
      </div>
    ];
  }
}

export default TrunkClub;
