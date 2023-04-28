import React from 'react';
import ReactDOM from 'react-dom/client';
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
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
