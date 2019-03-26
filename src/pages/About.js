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
            I am Nelson. I’m a Korean-American. I was born in Rockville and raised in Dallas; educated in Evanston. Despite my portfolio, I have an elementary-level understanding of Korean. I love tattoos and streetwear and spend 90% of my waking hours listening to music.
          </p>
        </header>
        <div className="about__more">
          <H1 customClass={"about__h1"}>
            What?
          </H1>
          <p className="about__introP">
            I’m an ex-Pre-Med student, turned Psychology student. It took 14 years to figure out becoming a surgeon wasn’t for me, 2 years to figure out Psychology wasn’t my professional calling, and 1 month to figure out I wanted to code for a living. I’ve been working as a professional developer for 3.5+ years now.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
