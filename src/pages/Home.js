import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home__header">
          <div className="home__headerText">
            <h1 className="home__h1 h1">
              <span>Hi.</span>
              <div>
                I’m <span className="home__name">Nelson.</span>
              </div>
            </h1>
            <p className="home__sub">
              I’m a Chicago-based (soon-to-be NYC)<br/> creative technologist / front-end developer.
            </p>
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
