import React, { Component } from 'react';
import {Image, Grid, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <footer>
        <Link to="/about">About</Link>
        <Link to="/">Help</Link>
        <Link to="/">Cirqls</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Service</Link>
      </footer>
    );
  }

}

export default Footer;
