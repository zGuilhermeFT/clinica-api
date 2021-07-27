import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home'
import Joaozinho from './views/Joaozinho'
import Pedrinho from './views/Pedrinho'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/joaozinho" component={Joaozinho} />
      <Route exact path="/pedrinho" component={Pedrinho} />
    </Switch>
  </Router>
);

export default Routes;