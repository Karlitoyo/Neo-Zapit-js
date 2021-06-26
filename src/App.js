import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Wallet from './pages/wallet';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/wallet" component={Wallet} exact />
      </Switch>
    </Router>
  );
}

export default App;
