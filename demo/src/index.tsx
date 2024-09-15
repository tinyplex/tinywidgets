import './index.css';
import ReactDOM from 'react-dom/client';
import {App} from './App';

addEventListener('load', () =>
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />),
);
