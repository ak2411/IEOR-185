import React, { Component } from 'react';
import People from './People';
import {Grid, Row, Col} from 'react-bootstrap';

// const peopleNames = new Map(['fedekunze', Date.now()]);

export class NewestConnections extends Component {
  constructor(props) {
    super(props);
    // const tempObject = {id: Date.now(), duration: value, target: Date.now()+value, name:seedNames.get(key)};

    this.state = {newConnections: [{name: 'fedekunze'}, {name: 'akosasih'}]};
  }
  render() {
    let newConnections = this.state.newConnections
    .map(item => {
      return <People name={item.name} />;
    });
    // const email = this.props.email;
    return (
      <Grid>
      <h1> Newest Connections </h1>
      <Row>
      {newConnections}
      </Row>
      </Grid>
    );
  }
}

export default NewestConnections;
