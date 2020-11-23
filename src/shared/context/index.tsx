import React from 'react';

import { MoviesProvider } from './MoviesContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <MoviesProvider>{children}</MoviesProvider>
  </ToastProvider>
);

export default AppProvider;
