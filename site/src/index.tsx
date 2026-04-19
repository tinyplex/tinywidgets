import ReactDOM from 'react-dom/client';
import {App} from './App';
import './prism.ts';

addEventListener('load', () =>
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />),
);
