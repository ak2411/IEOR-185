import React, { Component } from 'react';
import YourNetwork from './YourNetwork';
import './App.css';
import {Link} from 'react-router-dom';
import LandingPage from './LandingPage';

var QRCode = require('qrcode.react');
class App extends Component {
  render() {
    return (
        <LandingPage />
    );
  }
}

export default App;
