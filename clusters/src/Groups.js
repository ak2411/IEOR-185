import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
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
    })
    const alignBottom = {
      display: 'flex',
      alignItems: 'flex-end'
    }
    return (
      <Row height={300} style={alignBottom}>
      {groups}
      </Row>
    );
  }
}

export default Groups;
