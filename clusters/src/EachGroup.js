import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

export class EachGroup extends Component {
  render() {
    // const email = this.props.email;
    const boxStyle = {
      height: this.props.size/2 + 'em',
      border: '0.1px solid #C9C9C9',
      backgroundColor: '#F9F9F9',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.14)',
      margin: '10px 10px 10px',
      fontFamily: 'Work Sans',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <Col md={3} align="center" style={boxStyle}>
          <font>{this.props.size}<br/>
          {this.props.name}</font>
      </Col>
    );
  }
}

export default EachGroup;
