import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import LLog from './LLog';
import Login from './Login';


function Registration() {
  return <div>
    <React.Fragment>
      <Router>
      <LLog/>
        <Switch>
        <Route path="/Login" component={Login}/>
        </Switch>
      </Router>
    </React.Fragment>
    <h1>Wating for registration</h1>
  
  </div>;
}

export default Registration;
