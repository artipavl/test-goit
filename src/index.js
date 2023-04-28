import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'GlobalStyle';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';

import './fonts.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/test-goit">
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
