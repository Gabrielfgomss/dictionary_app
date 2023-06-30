import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@animxyz/core';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App.tsx';
import store from './store.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
