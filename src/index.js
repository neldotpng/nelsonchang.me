import React from 'react';
import ReactDOM from 'react-dom';
import './scss/general/main.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './Router';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById('root'));
