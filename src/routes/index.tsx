import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePopular from '../modules/pages/MoviePopular';
import MovieDetail from '../modules/pages/MovieDetail';
import MovieSearched from '../modules/pages/MovieSearched';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePopular} />
    <Route path="/movies/:id" exact component={MovieDetail} />
    <Route path="/movies/searched/:query" component={MovieSearched} />
  </Switch>
);

export default Routes;
