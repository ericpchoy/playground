// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Exercise1 from "./Homework/Exercise1"



function App() {
  return (
    <Router>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/Exercise1">Exercise 1</Link>
        </li>
      </ul>
    </nav>
    <Switch>

      <Route path="/Exercise1" component={Exercise1} />
    </Switch>

    </Router>  
  );
}

export default App;
