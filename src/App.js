import React, { Component } from 'react';
// import Card from '../src/components/Card/card';
import NavBar from './components/NavBar/navBar';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Login from "./components/pages/login";
import Profile from "./components/pages/profile";
import Collections from "./components/pages/collection";
import About from "./components/pages/about";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <Router>
            <div>
              <NavTabs />
              <Route exact path="/" component={Login} />
              <Route exact path="/myprofile" component={Profile} />
              <Route exact path="/collections" component={Collections} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </NavBar>
     </div>
    );
  }
}

export default App;
