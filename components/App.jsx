import React from 'react';
import ReactDOM from 'react-dom';

import Client from './Client';
import store from '../redux/store';

import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById("root"));
