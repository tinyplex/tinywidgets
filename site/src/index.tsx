import {App} from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

addEventListener('load', () =>
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />),
);
