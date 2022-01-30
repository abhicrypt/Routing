import React, { Component } from 'react';
import Navb from './Component/Navb';
import {BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import NavbarZ from './NavbarZ';
import About from './LinkedForm/About';

import Registration from './LinkedForm/Registration';
import Thappa from './LinkedForm/Thappa';

class App extends Component {
  render() {
    
    return (
      <>
    <React.Fragment>
       <Router>
      <Navb/>
      <Switch>
      <Route path="/About" component={About}/>
      <Route path="/Navbar" component={NavbarZ}/>
      <Route path="/Registration" component={Registration}/>
      <Route path="/Thappa" component={Thappa}/>
      
      
      </Switch>
      </Router>
      
    
    </React.Fragment>
    </>
    );
  }
}

export default App;
