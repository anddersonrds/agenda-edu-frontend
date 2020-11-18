import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movies/:id" component={MovieDetail} />
  </Switch>
);

export default Routes;
