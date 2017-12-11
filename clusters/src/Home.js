import React, { Component } from 'react';
import Navb from './Navb';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navb/>
        <header className="App-header">
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
