import React, { Component } from 'react';
import People from './People';
import {Grid, Row,Col} from 'react-bootstrap';
import EachGroup from './EachGroup';

export class Groups extends Component {
  constructor(props) {
    super(props);
    // either by industry, education or location
    this.state = {groupBy: this.props.graph, groups: [{name: "blockchain", size: "40"}, {name: "finance", size: "20"}]};
  }
  render() {
    let groups = this.state.groups
    .map(item => {
      return <EachGroup size={item.size} name={item.name} key={item.name}/>;
    });
    return (
      <Row>
      {groups}
      </Row>
    );
  }
}

export default Groups;
