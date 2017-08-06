import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Import routing components
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const history = createBrowserHistory();
ReactDOM.render((
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
