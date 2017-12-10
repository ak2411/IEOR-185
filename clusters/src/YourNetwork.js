import React, { Component } from 'react';
import NewestConnections from './NewestConnections'
import SocialGroups from './SocialGroups'
import {Grid} from 'react-bootstrap';

class YourNetwork extends Component {
  render() {
    /*const email = this.props.email;*/
    return (
      <Grid>
      <NewestConnections />
      <SocialGroups/>
      </Grid>
    );
  }
}

export default YourNetwork;
