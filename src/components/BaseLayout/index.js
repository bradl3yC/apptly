// Dependencies
import React, { Component } from 'react';
// Externals
import LoggedIn from '../LoggedIn';
import LoggedOut from '../LoggedOut';

class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "",
    }
  }

  render() {
    return (
      <div>
        {localStorage.token ? <LoggedIn /> : <LoggedOut />}
          {this.props.children}
      </div>
    )
  }
}


export default BaseLayout;
