import React, { Component } from 'react';
import {Col, Image} from 'react-bootstrap';
import './x_rotating_card_v1.4/css/bootstrap.css'
import './EachGroup.css'

export class EachGroup extends Component {
  render() {
    // const email = this.props.email;
    return (
      <div className="container-fluid">
        {this.props.name}
      </div>
    );
  }
}

export default EachGroup;
