
import React, { Component } from 'react';
import Login from './Login';
import {Link} from "react-router-dom"
export class LLog extends Component {
  render() {
    return <div>
         <li className="nav-item">
          <Link className="nav-link" as={Login} to={"Login"}>Login</Link>
        </li>
    </div>;
  }
}

export default LLog;
