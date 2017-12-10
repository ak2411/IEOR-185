import React, { Component } from 'react';
import {Image, Grid, Col, Row} from 'react-bootstrap';

class Contacted extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <Col md={4}>
              <Image src={this.props.contactImg} circle />
            </Col>
            <Col md={8}>
              <p>{this.props.contactName}</p>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }

}

export default Contacted;
