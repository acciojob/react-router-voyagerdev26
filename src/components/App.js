
import React from "react";
import './../styles/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

import {Switch,BrowserRouter,Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    
      <div>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
