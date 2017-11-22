import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class About extends Component {

  componentWillMount () {
    console.log('About MOUNT');
  }

  componentWillUnmount () {
    console.log('About UNMOUNT');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
          About Clusters
        </p>
        <Link to="/">App</Link>
      </div>
    );
  }
}

export default About;
