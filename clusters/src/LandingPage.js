import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navb from './Navb';
import Content from './Content';
import Footer from './Footer';
import ValueProp from './ValueProp';
import {Grid, Jumbotron, Button} from 'react-bootstrap';


class Main extends Component {
  render() {
    return (
      <Grid>
        <Navb />
        <Content />
        <ValueProp />
        <Footer />
        </Grid>
    );
  }
}

export default Main;
