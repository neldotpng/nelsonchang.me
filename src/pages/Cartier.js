import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import VC from '../components/VC';

import video1 from '../assets/videos/cartier/cartier-1.mp4';
import video2 from '../assets/videos/cartier/cartier-2.mp4';
import video3 from '../assets/videos/cartier/cartier-3.mp4';
import video4 from '../assets/videos/cartier/cartier-4.mp4';

const poster = null;

class Cartier extends Component {
  render() {
    return [
      <section
        key="main"
        className="page marquee caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Cartier</H1>
          <p className="caseStudy__p">
            Cartier approached the New York Times to create a three-part series of Paid Posts
            detailing Cartier&rsquo;s history and showcasing some of their most iconic designs as
            part of a larger advertising campaign. I was brought on at the end of the design process
            to help with animations, layout cleanup, and creation of a general template to be reused
            in the later chapters.
          </p>
          <p className="caseStudy__note">
            *Please be advised that since some aspects of these posts are hosted on the ad servers
            of the New York Times, some interactions may break if you have an AdBlocker enabled.
          </p>
          <div className="caseStudy__cta">
            <Button href="https://www.nytimes.com/paidpost/cartier/the-genesis-of-cartier-icons.html">
              View article
            </Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Built in <span class="caseStudy__emphasis">Webflow</span> and needing to be handed off
            to designers for the later chapters, there were limitations on the customization and
            complexity that could be used to create some of the interactions.
          </p>
        </aside>
        <div className="caseStudy__images">
          <VC
            customClass="caseStudy__video"
            src={video1}
            poster={poster}>
            Cartier intro animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video2}
            poster={poster}>
            Cartier scrolling copy sample
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video3}
            poster={poster}>
            Cartier section header scrolling animation
          </VC>
          <VC
            customClass="caseStudy__video"
            src={video4}
            poster={poster}>
            Cartier hovering keyframe animation
          </VC>
        </div>
      </section>,
      <div
        key="Cta"
        className="caseStudy__next">
        <Link
          to="/marquee-sports"
          className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Marquee</span>
        </Link>
      </div>,
    ];
  }
}

export default Cartier;
