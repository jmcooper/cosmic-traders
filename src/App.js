import React from 'react';
import {
  BrowserRouter as  Router,
  Switch,
  Route
} from "react-router-dom"

import './App.css';
import Outpost from './Outpost'
import Checkout from './checkout/Checkout'

function App() {
  return (
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
  )
}

export default App
