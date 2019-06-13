import React, { Component } from 'react';

import H1 from '../components/H1';

class Home extends Component {
  render() {
    return (
      <section className="page home">
        <header className="home__header">
          <div className="home__headerText">
            <div className="home__large">
              <div>Hi.</div>
              <H1 customClass="home__h1">
                I’m Nelson.
              </H1>
            </div>
            <p className="home__sub">
              I’m a NYC-based creative technologist / front-end developer.
            </p>
          </div>
        </header>
      </section>
    )
  }
}

export default Home;
