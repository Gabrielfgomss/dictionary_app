import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@animxyz/core';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
