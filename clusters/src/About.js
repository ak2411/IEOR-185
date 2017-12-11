import React, { Component } from 'react';
import Navb from './Navb';
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
        <Navb/>
        <header className="App-header">
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
          About Clusters
        </p>
      </div>
    );
  }
}

export default About;
