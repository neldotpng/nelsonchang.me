import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import H1 from '../components/H1';
import IC from '../components/IC';
import VC from '../components/VC';

import video from '../assets/images/everythingelse/usdz-balls.mp4';
import poster from '../assets/images/everythingelse/poster.jpg';
import usdz from '../assets/images/everythingelse/usdz-cube.jpg';
import portfolio from '../assets/images/everythingelse/portfolio-2017.jpg';

class EverythingElse extends Component {
  render() {
    return [
      <section
        key="main"
        className="page everythingElse caseStudy">
        <header className="caseStudy__header">
          <H1 customClass="caseStudy__h1">Everything Else</H1>
          <p className="caseStudy__p">
            At both work and in my free time, I’ve had the opportunity to explore a great variety of
            new technologies, as well as experiment with old frameworks that I’m less familiar with.
            On this page you’ll find some things I’ve worked on that wouldn’t quite be labeled as
            full blown projects, but that I feel are worth sharing nonetheless.
          </p>
        </header>
        <aside className="caseStudy__aside">
          <h2 className="caseStudy__h2">Details</h2>
          <p className="caseStudy__details">
            A few experiments with <span className="caseStudy__emphasis">Blender</span> and{' '}
            <span className="caseStudy__emphasis">USDZ</span>, and a small project with{' '}
            <span className="caseStudy__emphasis">React Native</span>. Also, my old portfolio built
            with vanilla <span className="caseStudy__emphasis">HTML</span>,{' '}
            <span className="caseStudy__emphasis">CSS</span>,{' '}
            <span className="caseStudy__emphasis">JavaScript</span>, and no framework.
          </p>
        </aside>
        <div className="caseStudy__images">
          <div className="everythingElse__etc">
            <VC
              customClass="caseStudy__video"
              src={video}
              poster={poster}>
              USDZ ball wave animation
            </VC>
            <IC
              customClass="caseStudy__image"
              src={usdz}
              alt="USDZ lifesize reflective cube with window"
              waypoint={true}
            />
            <H1 customClass="everythingElse__h1">USDZ</H1>
            <p className="caseStudy__p">
              Working with Blender for the first time, I made a simplistic moving 3D ball wave model
              in order to explore the process of converting animated 3D models to USDZ, Apple’s new,
              collaborative 3D file format with Pixar. (Note: USDZ models are only viewable on iOS
              12+.)
            </p>
            <div
              className="caseStudy__cta"
              style={{ marginBottom: '40px' }}>
              <Button href="/files/ball-wave.usdz">View USDZ</Button>
            </div>
            <p className="caseStudy__p">
              In a similar vein to the ball wave, this was a quick experiment with a lifesize cube
              that could be stepped into. It was a simple proof of concept to see what the
              experience of walking into a USDZ model would be like and how textures would be
              rendered.
            </p>
            <div className="caseStudy__cta">
              <Button href="/files/cube-black.usdz">View USDZ</Button>
            </div>
          </div>

          <div className="everythingElse__etc">
            <IC
              customClass="caseStudy__image"
              src={portfolio}
              alt="Portfolio 2017 landing page"
              waypoint={true}
            />
            <H1 customClass="everythingElse__h1">Portfolio 2017</H1>
            <p className="caseStudy__p">My original portfolio site.</p>
            <div className="caseStudy__cta">
              <Button href="/2017/index.html">View site</Button>
            </div>
          </div>

          <div className="everythingElse__etc">
            <H1 customClass="everythingElse__h1">Windy City 311</H1>
            <p className="caseStudy__p">
              Windy City 311 was a React Native internal project at Perficient Digital Labs. The
              primary goal was to setup a more easily accessible 311 mobile app than what was
              currently available on the market. The secondary goal was to gain experience with
              React Native as a framework. The implementation was barebones but efficient.
            </p>
            <div className="caseStudy__cta">
              <Button href="https://windycity311.perficientdigitallabs.com/">View site</Button>
            </div>
          </div>
        </div>
      </section>,
      <div
        key="cta"
        className="caseStudy__next">
        <Link
          to="/verizon"
          className="caseStudy__nextCta">
          <span className="caseStudy__nextLabel">Next</span>
          <span className="caseStudy__caseStudy">Verizon</span>
        </Link>
      </div>,
    ];
  }
}

export default EverythingElse;
