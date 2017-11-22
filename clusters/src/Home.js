import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Home</h1>
        </header>
        <p className="App-intro">
        Hello home
        </p>
      </div>
    );
  }
}

export default Home;
