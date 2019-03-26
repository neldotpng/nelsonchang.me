import React, { Component } from 'react';

import H1 from '../components/H1';

class About extends Component {
  render() {
    return (
      <section className="page about">
        <header className="about__intro">
          <H1 customClass={"about__h1"}>
            Who?
          </H1>
          <p className="about__introP">
            My name is Nelson Chang. I’m a Korean-American. I was born in Rockville and raised in Dallas; educated in Evanston. I’m an ex-Pre-Med student, turned Psychology student, and I’ve been working as a professional developer for 3.5+ years now.
          </p>
        </header>
        <div className="about__more">
          <H1 customClass={"about__h1"}>
            What?
          </H1>
          <p className="about__introP">
            Despite what my portfolio might indicate, I never fully learned to speak Korean. I love tattoos and streetwear and spend 90% of my waking hours listening to music. In my free time I like watching Vine compilations, wheel throwing, or playing Super Smash Bros.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
