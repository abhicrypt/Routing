import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import React from 'react'
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Navbarimage from './component/Navbarimage';

// export class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Router>
//           <Navbar/>
//           <Switch>
//           <Route   path='/home' component={Home}/> 
//           </Switch>
//         </Router>
//       </React.Fragment>
//     )
//   }
// }

// export default App
// import React from 'react'

function App() {
  return (
    <div>
      
      <React.Fragment>
        <Router>
         <Navbar/>
          <Switch>
           <Route path='/Navbarimage' component={Navbarimage}/> 
           <Route path='/Home' component={Home}/> 
           <Route path='/Registration' component={Registration}/> 
           </Switch>
         </Router>
      </React.Fragment>
    </div>
  )
}

export default App