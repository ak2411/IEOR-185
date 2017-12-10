import React, { Component } from 'react';
import {Image, Grid, Col, Row} from 'react-bootstrap';

class Activity extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  _getActivityCount(count) {
    if (count === 1) {
      return 'a';
    } else if (count > 1) {
      return `${count}`; }
  }

  _getDaysAgo(date) {
    const ago = moment(date).fromNow();
    return ago;
  }


  render() {

    const amount = <span></span>

    return(
        <Row>
          <Col md={2}>
            <Image src={this.props.profileImg} circle>
          </Col>
          <Col md={8}>
            <p className="name">
              <span>{this.props.name}</span> <span>{this.props.action}</span>
              <span>{this._getActivityCount(this.props.amount)}</span> <span>{this.props.what}</span>

            </p>
            <p className="company">
              {this.props.company}
            </p>
          </Col>
          <Col md={2}>
            <p>{this._getDaysAgo}</p>
          </Col>
        </Row>
    );
  }

}

export default Activity;
