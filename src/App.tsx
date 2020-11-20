import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { MoviesProvider } from './context/MoviesContext';

const App = () => (
  <BrowserRouter>
    <MoviesProvider>
      <Routes />
    </MoviesProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
