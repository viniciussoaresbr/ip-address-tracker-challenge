import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import GeolocationProvider from './services/GeolocationContext';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GeolocationProvider>
      <GlobalStyle />
      <Home />
    </GeolocationProvider>
  </React.StrictMode>,
);
