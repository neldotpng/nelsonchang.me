import React, { Component } from 'react';
import cx from 'classnames';

class About extends Component {
  state = {
    transitioned: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        transitioned: true,
      })
    }, 2000);
  }

  render() {
    const h1Classes = cx("about__h1", "h1", {
      "is-transitioned": this.state.transitioned,
    });

    return (
      <section className="about">
        <header className="about__intro">
          <h1 className={h1Classes}>
            Who am I?
          </h1>
          <p className="about__introP">
            I am Nelson. I’m a Korean-American. I was born in Rockville and raised in Dallas; educated in Evanston. Despite my portfolio, I have an elementary-level understanding of Korean. I love tattoos and streetwear and spend 90% of my waking hours listening to music.
          </p>
        </header>
        <div className="about__more">
          <h1 className={h1Classes}>
            What am I?
          </h1>
          <p className="about__introP">
            I’m an ex-Pre-Med student, turned Psychology student. It took 14 years to figure out becoming a surgeon wasn’t for me, 2 years to figure out Psychology wasn’t my professional calling, and just 1 month to figure out I wanted to be a creative developer for a living. I’ve been working as a professional developer for 3.5+ years now.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
