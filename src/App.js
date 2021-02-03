import React from 'react';
import {
  BrowserRouter as  Router,
  Switch,
  Route
} from "react-router-dom"

import './App.css';
import Outpost from './outpost/Outpost'
import Checkout from './checkout/Checkout'
import { Fragment } from 'react';

function App() {
  return (
    <div className="app">
      <div className="header">
        <img class="logo" src={ require('./images/logo.png') } />
      </div>
      <div className="content">
        <Router>
          <Switch>
            <Route path="/outpost">
              <Outpost />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Outpost />
            </Route>
          </Switch>          
        </Router>
      </div>
    </div>
  )
}

export default App
