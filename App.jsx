import React from 'react';
import ReactDOM from 'react-dom';

import Client from './components/Client';
import store from './store';

import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById("root"));
