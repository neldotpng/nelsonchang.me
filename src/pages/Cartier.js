import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

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
              View site
            </Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Built in <span class="caseStudy__emphasis">Webflow</span> and needing to be handed off
            to designers for the later chapters, there were limitations on the customization and
            complexity that could be used to create some of the interactions. For example, in the
            header animation, Webflow did not allow for{' '}
            <span class="caseStudy__emphasis">font-size</span> to be animated, so a workaround had
            to be used to adjust the height of the container at the same rate as the scale-down for
            the text. Other small tricks like this were used throughout the Paid Post to give the
            article a more bespoke feel.
          </p>
        </aside>
        <div className="caseStudy__images"></div>
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
