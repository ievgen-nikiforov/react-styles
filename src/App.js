import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Signup from "./component/signup";
import Signin from "./component/signin.js";
import Home from "./component/home.js";

function App() {
  return (
          <HashRouter>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
          </ul>
          <div className="content">        
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
          </div>
        </HashRouter>

  );
}

export default App;
