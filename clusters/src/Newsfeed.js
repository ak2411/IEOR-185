import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import Activity from './Activity';
import Footer from './Footer';
import Navb from './Navb';


class Newsfeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Navb/>
        <Grid>
          <Col>
            <h2>Activity</h2>
            <Activity/>
          </Col>
          <Col>
          </Col>
        </Grid>
        <Footer/>
      </div>
    );
  }

}

export default Newsfeed;
