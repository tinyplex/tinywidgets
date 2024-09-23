import './components/Title.css.ts';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

addEventListener('load', () =>
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />),
);
