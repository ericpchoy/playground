// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Exercise1 from "./Homework/Exercise1"
import Exercise2 from "./Homework/Exercise2"
import Exercise3 from "./Homework/Exercise3"



function App() {
  return (
    <Router>

    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink> 
        </li>
        <li>
         <a href="https://github.com/ericpchoy/playground" target="_blank" rel='noopener noreferrer'>GitHub</a>
         </li>
        <li>
          <NavLink to="/Exercise1">Exercise 1</NavLink>
        </li>
        <li>
          <NavLink to="/Exercise2">Exercise 2</NavLink>
        </li>
        <li>
          <NavLink to="/Exercise3">Exercise 3</NavLink>
        </li>
      </ul>
    </nav>
    
    <Switch>
     <Route path="/Exercise1" component={Exercise1} />
     <Route path="/Exercise2" component={Exercise2} />
     <Route path="/Exercise3" component={Exercise3} />

     </Switch>


    </Router>
  );
}
// <Router>
  
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink> 
    //     </li>
    //     <li>
    //       <NavLink to="/GitHub" target="_blank" rel='noopener noreferrer'>GitHub</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/Exercise1">Exercise 1</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/Exercise2">Exercise 2</NavLink>
    //     </li>
    //   </ul>
    // </nav>
    // <Switch>
    // <Route path='/GitHub' component={() => { 
    //  window.location.href = 'https://github.com/ericpchoy/playground'; 
    //  return null;
    // }}/>

    // <Route path="/Exercise1" component={Exercise1} />

    // <Route path="/Exercise2" component={Exercise2} />

    // </Switch>

    // </Router>  

export default App;
