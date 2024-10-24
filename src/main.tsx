import { render } from 'preact';
import { App } from './app.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')!,
);
