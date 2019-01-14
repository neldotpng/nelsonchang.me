import React, { Component } from 'react';
import '../scss/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1 className="Home-marquee">
            <span>Nelson Chang Nelson Chang&nbsp;</span>
            <span>Nelson Chang Nelson Chang&nbsp;</span>
          </h1>
          <h2 className="Home-marquee Home-marquee__reverse">
            <span>Portfolio Portfolio&nbsp;</span>
            <span>Portfolio Portfolio&nbsp;</span>
          </h2>
          <h3 className="Home-marquee Home-marquee__outline">
            <span>Under Construction&nbsp;</span>
            <span>Under Construction&nbsp;</span>
          </h3>
          <h3 className="Home-marquee Home-marquee__reverse Home-marquee__outline">
            <span>S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
            <span>S/S 2019 S/S 2019 S/S 2019&nbsp;</span>
          </h3>
        </header>
      </div>
    );
  }
}

export default Home;
