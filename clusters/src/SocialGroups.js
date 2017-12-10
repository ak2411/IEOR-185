import React, { Component } from 'react';
import Groups from './Groups';
import {Nav, NavDropdown, MenuItem, Row, Col, Tab, Tabs} from 'react-bootstrap';
class SocialGroups extends Component {
  constructor(props){
    super(props);
    this.state = {graph: "1"};
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(event){
    this.setState({
      graph: event
    });
  }

  render() {
    return (
      <Row>
      <Col md={12}><h1>View Network</h1></Col>
      <Tabs activeKey={this.state.graph} animation={false} id="view-network" onSelect={this.handleSelect}>
        <Tab eventKey="1" title="Industry"></Tab>
        <Tab eventKey="2" title="School"></Tab>
        <Tab eventKey="3" title="Location"></Tab>
        <Tab eventKey="4" title="Strongest Links"></Tab>
      </Tabs>
      <Col md={12}><Groups name={this.state.graph}/></Col>
      </Row>
    );
  }
}

export default SocialGroups;
