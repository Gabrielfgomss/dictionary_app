import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@animxyz/core';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <App />
    </div>

  </React.StrictMode>
);
