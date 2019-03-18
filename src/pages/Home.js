import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home__header">
          <div className="home__headerText">
            <h1 className="home__h1">
              <span>Hey.</span>
              <div>I&rsquo;m <span className="home__name">Nelson.</span></div>
            </h1>
            <p className="home__sub">
              I&rsquo;m a Chicago-based (soon-to-be NYC-based)<br/> creative technologist / front-end developer.
            </p>
          </div>
          <div className="home__scroll">
            <div className="home__scrollContainer">
              <span>Scroll</span>
              <div className="arrow__down">
                <div className="arrow__caret" />
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
