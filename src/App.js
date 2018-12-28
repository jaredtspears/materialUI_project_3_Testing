import React, { Component } from 'react';
import Card from '../src/components/Card/card';
import NavBar from './components/NavBar/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <Card/>
      </div>
    );
  }
}

export default App;
