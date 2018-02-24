import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route } from 'react-router-dom';
import Company from './Company';

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { stock_list_reducer } from './reducers/stock_list_reducer.js'
import { company_reducer } from './reducers/company_reducer.js'
import { Provider } from "react-redux"

const middleware = applyMiddleware(thunk, logger)
let store = createStore(combineReducers({
  stock_list_reducer, company_reducer
}), middleware)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/stocks' component={App} />
        <Route path='/company/:id' component={Company} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
