import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './shared/context';

import Routes from './routes';

import GlobalStyle from './shared/styles/global';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
