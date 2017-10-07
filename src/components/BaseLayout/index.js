// Dependencies
import React, { Component } from 'react';
// Externals
import NavBar from '../NavBar';
// Internals
import './index.css';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default BaseLayout;
