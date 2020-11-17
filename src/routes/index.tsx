import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" component={Movies} />
  </Switch>
);

export default Routes;
