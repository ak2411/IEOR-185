import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';


class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
        <Grid>
          <Row>
            <h3>To-Do</h3>
          </Row>
        </Grid>
      </div>

    );
  }

}

export default Today;
