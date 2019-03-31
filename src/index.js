import React from 'react';
import ReactDOM from 'react-dom';
import './scss/general/main.scss';

import { BrowserRouter } from 'react-router-dom';
import App from './Router';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
document.getElementById('root'));
