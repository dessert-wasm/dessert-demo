import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import * as serviceWorker from './services/serviceWorker';

import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import './index.css'


ReactDOM.render(
  <div className="page">
    <App />
  </div>, document.getElementById('root'));

serviceWorker.unregister();
