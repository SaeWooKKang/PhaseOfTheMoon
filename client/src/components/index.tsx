import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Today from '../Routes/Today';
import Weekly from '../Routes/Weekly'

import store from '../redux/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={ store }>  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='today' element={ <Today/> } />
        <Route path='weekly' element={ <Weekly/> }/>
      </Routes>
    </BrowserRouter>
  </Provider>
  ,document.getElementById("root")
);
