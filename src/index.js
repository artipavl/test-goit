import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import { GlobalStyle } from 'GlobalStyle';

import './fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-goit">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
