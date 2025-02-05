import React, { Component } from 'react';
import cx from 'classnames';
import debounce from '../functions/debounce';

import H1 from '../components/H1';
import IC from '../components/IC';

import nelson from '../assets/images/about/nelson.jpg';
import rockville from '../assets/images/about/rockville.jpg';
import evanston from '../assets/images/about/evanston.jpg';

class About extends Component {
  state = {
    index: 0,
  };

  onMouseEnter1 = () => {
    this.setState({ index: 1 });
  };

  onMouseEnter2 = () => {
    this.setState({ index: 2 });
  };

  onMouseEnter3 = () => {
    this.setState({ index: 3 });
  };

  hideImages = () => {
    this.setState({ index: 0 });
  };

  componentDidMount() {
    document.addEventListener('touchmove', debounce(this.hideImages, 1000 / 10));
  }

  calculateYears() {
    const date = new Date();
    const year = date.getFullYear();
    const diff = year - 2016;
    return <span>{diff}</span>;
  }

  render() {
    const image1 = cx('about__image', {
      'is-visible': this.state.index === 1,
    });
    const image2 = cx('about__image', {
      'is-visible': this.state.index === 2,
    });
    const image3 = cx('about__image', {
      'is-visible': this.state.index === 3,
    });

    return (
      <section className="page about">
        <div className="about__who">
          <div className="about__intro">
            <H1 customClass={'about__h1'}>Who?</H1>
            <p className="about__p">
              My name is{' '}
              <span
                className="about__hover"
                onClick={this.onMouseEnter1}
                onMouseEnter={this.onMouseEnter1}
                onMouseLeave={this.hideImages}>
                Nelson Chang
              </span>
              . I’m a Korean-American and the youngest of{' '}
              <span
                className="about__hover"
                onClick={this.onMouseEnter2}
                onMouseEnter={this.onMouseEnter2}
                onMouseLeave={this.hideImages}>
                three brothers
              </span>{' '}
              . I was born in Rockville and raised in Dallas;{' '}
              <span
                className="about__hover"
                onClick={this.onMouseEnter3}
                onMouseEnter={this.onMouseEnter3}
                onMouseLeave={this.hideImages}>
                educated
              </span>{' '}
              in Evanston. After living in Chicago for 4 years post-college, I’m now located in
              Brooklyn, NY where I’ve lived for the last 5 years. My interests go through shifts and
              phases, but lately I’ve been loving bread baking, Rocket League, sewing,
              hand-embroidery, learning Japanese, and bowling. My constant interests are in music,
              tattoos, manga, and clothing; I have a lot of opinions if you just ask!
            </p>
          </div>
          <div className="about__images">
            <IC
              customClass={image1}
              src={nelson}
              alt="Current picture of me."
              waypoint={false}
            />
            <IC
              customClass={image2}
              src={rockville}
              alt="My brothers and I on the street I grew up on."
              waypoint={false}
            />
            <IC
              customClass={image3}
              src={evanston}
              alt="Me at my college graduation."
              waypoint={false}
            />
          </div>
        </div>

        <div className="about__what">
          <H1 customClass={'about__h1'}>What?</H1>
          <p className="about__p">
            I’m an ex-Pre-Med student, turned Psychology student, turned front-end developer; I’ve
            been working as a full-time developer for about {this.calculateYears()} years now. I’ve
            worked on projects ranging from interaction-heavy and visually intensive marketing sites
            and webpages to AR/VR to Actions for Google to high-fidelity prototypes and simple
            mobile apps. While the range of work that I’ve been fortunate to work on has been broad,
            my specialty lies in working with designers to concept and develop clean and
            user-friendly interfaces with meaningful and enjoyable user interactability. I’ve been
            teaching myself 3D (THREE.js, WebGL/GLSL, Blender, R3F) and am always looking for
            opportunities to expand my work in that space.
          </p>
        </div>

        <div className="about__where">
          <H1 customClass={'about__h1'}>Where?</H1>
          <p className="about__p">
            You can find some of my selected works in the menu. Here’s a link to my{' '}
            <a
              href="/files/NelsonChang-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              résumé
            </a>
            . You can add me on{' '}
            <a
              href="https://www.linkedin.com/in/nelsonschang/"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              LinkedIn
            </a>
            , find me on{' '}
            <a
              href="https://github.com/neldotpng"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              GitHub
            </a>
            , or send me an email at{' '}
            <a
              href="mailto:nelsonschang@gmail.com"
              className="about__link">
              nelsonschang@gmail.com
            </a>
            . If you’re curious about what I’ve been listening to you can take a peep at my{' '}
            <a
              href="https://soundcloud.com/neldot/likes"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              SoundCloud
            </a>
            . If you’re just looking for a good time,{' '}
            <a
              href="https://youtu.be/ybH4RJoCj80"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              watch
            </a>{' '}
            one of the greatest movie scenes in cinema history, or{' '}
            <a
              href="https://youtu.be/AQswlNgSGJM"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link">
              listen
            </a>{' '}
            to one of my favorite songs of all time.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
