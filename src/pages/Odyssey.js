import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import ReactPlayer from 'react-player';
import cx from 'classnames';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

import video from '../assets/images/odyssey/odyssey-transitions.mp4';
import poster from '../assets/images/odyssey/odyssey-poster.png';
import image1 from '../assets/images/odyssey/odyssey-comp1.png';
import image2 from '../assets/images/odyssey/odyssey-comp2.png';
import image3 from '../assets/images/odyssey/odyssey-comp3.png';
import image4 from '../assets/images/odyssey/odyssey-comp4.png';

class Odyssey extends Component {
  state = {
    isVisible: false,
  };

  onEnter = () => {
    this.setState({
      isVisible: true,
    });
  };

  render() {
    const vimeoClasses = cx('caseStudy__vimeo', {
      'is-visible': this.state.isVisible,
    });

    return [
      <section
        key="main"
        className="page odyssey caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Odyssey</H1>
          <p className="caseStudy__p">
            At Perficient Digital Labs, I was tasked with developing a high-fidelity proof of
            concept for a smart spaces app. The idea was to use beacons to supplement and automate a
            web app tour experience for new employees. The smart spaces concept could be broadly
            applied to automate tours of any space like an office, museum, or grocery store.
          </p>
          <div className="caseStudy__cta">
            <Button href="https://blog.truthlabs.com/a-new-way-to-experience-space-ac01c9823a25">
              Read more
            </Button>
          </div>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            Developed with <span className="caseStudy__emphasis">React</span> on the front-end and
            flexing <span className="caseStudy__emphasis">Progressive Web App (PWA)</span>{' '}
            capabilities for offline functionality and a native app feel. The back-end used{' '}
            <span className="caseStudy__emphasis">Socket.IO</span> to connect to Raspberry Pi
            beacons. The 3D isometric model of the office was loaded and animated using{' '}
            <span className="caseStudy__emphasis">THREE.js</span> and{' '}
            <span className="caseStudy__emphasis">GSAP</span>.
          </p>
        </aside>
        <div className="caseStudy__images">
          <Waypoint
            scrollableAncestor={window}
            onEnter={this.onEnter}
            bottomOffset="200px">
            <div className={vimeoClasses}>
              <ReactPlayer
                className="caseStudy__vimeoVideo"
                url="https://vimeo.com/320330995"
                width="100%"
                height="100%"
              />
            </div>
          </Waypoint>
          <VC
            customClass="caseStudy__video"
            src={video}
            poster={poster}>
            Homepage 3D transitions and animations
          </VC>
          <IC
            customClass="caseStudy__image"
            src={image1}
            alt="Odyssey landing page"
            waypoint={true}
          />
          <IC
            customClass="caseStudy__image"
            src={image2}
            alt="Odyssey onboarding second page"
            waypoint={true}
          />
          <IC
            customClass="caseStudy__image"
            src={image3}
            alt="Odyssey gym area overview slide"
            waypoint={true}
          />
          <IC
            customClass="caseStudy__image"
            src={image4}
            alt="Odyssey conference room example"
            waypoint={true}
          />
        </div>
      </section>,
      <div
        key="Cta"
        className="caseStudy__next">
        <Link
          to="/etc"
          className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Everything Else</span>
        </Link>
      </div>,
    ];
  }
}

export default Odyssey;
