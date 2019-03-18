import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home__header">
          <div className="home__headerText">
            <h1 className="home__h1">
              <span>My name is</span>
              <span className="home__name">Nelson Chang</span>
            </h1>
            <p className="home__sub">
              I&rsquo;m a former Pre-Med turned Psych major, and now I work as a front-end developer.
            </p>
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
