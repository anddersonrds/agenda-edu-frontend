import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MoviesProvider } from './shared/context/MoviesContext';

import Routes from './routes';

import GlobalStyle from './shared/styles/global';

const App = () => (
  <BrowserRouter>
    <MoviesProvider>
      <Routes />
    </MoviesProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
