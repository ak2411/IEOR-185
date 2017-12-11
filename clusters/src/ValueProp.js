import React, { Component } from 'react';
import {Grid, Col} from 'react-bootstrap';

export class ValueProp extends Component {
  render() {
    const alignCenter = {
      textAlign: 'center',
      height: '10vh'
    }
    return (
      <Grid style={alignCenter}>
        <Col md={4}>Grow meaningful, organic connections</Col>
        <Col md={4}>Know your network</Col>
        <Col md={4}>Easily stay in touch with important connections</Col>
      </Grid>
    );
  }
}

export default ValueProp;
