import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter, Switch } from 'react-router';

import Transition from './Transition';

import Home from './pages/Home';
import About from './pages/About';
import Marquee from './pages/Marquee';
import Odyssey from './pages/Odyssey';
import TrunkClub from './pages/TrunkClub';
import EverythingElse from './pages/EverythingElse';
import ComingSoon from './pages/ComingSoon';

const App = withRouter(({ history, location }) => (
  <Transition history={history} location={location.pathname}>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/marquee-sports" component={Marquee} />
      <Route exact path="/odyssey" component={Odyssey} />
      <Route exact path="/trunk-club" component={TrunkClub} />
      <Route exact path="/etc" component={EverythingElse} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  </Transition>
));

export default App;
