import React, { Component } from 'react';
import logo from './logo.svg';
import Navb from './Navb';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Navb/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </div>
    </div>
    );
  }
}

export default App;
