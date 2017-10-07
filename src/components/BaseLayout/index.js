// Dependencies
import React, { Component } from 'react';
// Externals
import NavBar from '../NavBar';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}


export default BaseLayout;
