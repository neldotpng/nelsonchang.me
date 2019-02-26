import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter, Switch } from 'react-router';

import Transition from './Transition';

import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';

const App = withRouter(({ history, location }) => (
  <Transition history={history} location={location.pathname}>
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/coming-soon" component={ComingSoon} />
    </Switch>
  </Transition>
));

export default App;
