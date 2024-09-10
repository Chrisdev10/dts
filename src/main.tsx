import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')!,
);
