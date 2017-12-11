import React, { Component } from 'react';
import {Grid, Jumbotron, Button} from 'react-bootstrap';

export class EachGroup extends Component {
  render() {
    const jumbotronStyle = {
      height: '75vh'
    }
    return (
      <Jumbotron className="banner" style={jumbotronStyle}>
        <h1>CIRQLS</h1>
        <p>Create organic connections.</p>
        {/* <p><Button bsStyle="primary">Learn more</Button></p>*/}
      </Jumbotron>
    );
  }
}

export default EachGroup;
