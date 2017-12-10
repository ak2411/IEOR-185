import React, { Component } from 'react';
import People from './People';
import {Row,Col} from 'react-bootstrap';

// const peopleNames = new Map(['fedekunze', "Federico Kunze"]);

export class NewestConnections extends Component {
  constructor(props) {
    super(props);
    // const tempObject = {id: Date.now(), duration: value, target: Date.now()+value, name:seedNames.get(key)};

    this.state = {newConnections: [{name: 'fedekunze'}, {name: 'akosasih'}]};
  }
  render() {
    let newConnections = this.state.newConnections
    .map(item => {
      return <People name={item.name} key={item.name}/>;
    });
    // const email = this.props.email;
    return (
      <Row>
      <Col md={12}><h1> Newest Connections </h1></Col>
      {newConnections}
      </Row>
    );
  }
}

export default NewestConnections;
