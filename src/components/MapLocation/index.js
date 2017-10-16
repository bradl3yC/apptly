// Dependencies
import React, { Component } from 'react';
// Internals
import './index.css';

class MapLocation extends Component {
  render() {
    return(
      <div className="location">
        {this.props.text}
      </div>
    )
  }
}

export default MapLocation;
