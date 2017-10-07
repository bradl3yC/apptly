import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super (props)
    this.state = {
      location: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/locations/` + this.props.match.params.id)
    .then(response => response.json())
    .then(location => this.setState({ location }))
  }

  render() {
    return (
      <div>
        <p>{this.state.location.name}</p>
        <p>{this.state.location.address}</p>
        <p>{this.state.location.phone_number}</p>
      </div>
    );
  }
}

export default Show;
