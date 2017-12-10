import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Contacted from './Contacted';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  _contactedCount(count) {
    if (count === 0) {
      return 'Contact someone in your connections';
    } else if (count > 1) {
      return `You contacted     ${count}`; }
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <h3>{this._contactedCount(this.props.contacted)}</h3>
          </Row>
          <Row>
            <Contacted />
          </Row>
        </Grid>
      </div>

    );
  }

}

export default Week;
