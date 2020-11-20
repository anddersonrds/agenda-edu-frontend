import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../modules/pages/Home';
import Search from '../modules/pages/Search';
import MovieDetail from '../modules/pages/MovieDetail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movies/:id" component={MovieDetail} />
    <Route path="/movies/search" component={Search} />
  </Switch>
);

export default Routes;
