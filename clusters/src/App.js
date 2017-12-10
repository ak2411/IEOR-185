import React, { Component } from 'react';
import YourNetwork from './YourNetwork';
import './App.css';
import {Link} from 'react-router-dom';

var QRCode = require('qrcode.react');
class App extends Component {
  render() {
    return (
        <YourNetwork />
    );
  }
}

export default App;
