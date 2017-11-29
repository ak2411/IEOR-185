import React, { Component } from 'react';
import Groups from './Groups';
import {Nav, NavDropdown, MenuItem} from 'react-bootstrap';
class SocialGroups extends Component {
  render() {
    return (
      <div>
      <Nav>
        <NavDropdown title="sort_by" id="basic-nav-dropdown">
          <MenuItem> Industry </MenuItem>
          <MenuItem> School </MenuItem>
          <MenuItem> Location </MenuItem>
          <MenuItem> Hobbies </MenuItem>
        </NavDropdown>
      </Nav>
      <div><Groups /></div>
      </div>
    );
  }
}

export default SocialGroups;
