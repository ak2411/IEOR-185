import React, { Component } from 'react';
import NewestConnections from './NewestConnections'
import SocialGroups from './SocialGroups'

class YourNetwork extends Component {
  render() {
    return (
      <div>
      <h1> Your Network </h1>
      <div>
        <NewestConnections />
        <SocialGroups />
      </div>
      </div>
    );
  }
}

export default YourNetwork;
