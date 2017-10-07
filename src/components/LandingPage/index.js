import React, { Component } from 'react';


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/locations')
    .then(response => response.json())
    .then(locations => this.setState({ locations }))
  }

  render() {
    const location = this.state.locations.map((location, index) => {
      return (
        <div key={index}>
          <p>{location.name}</p>
          <p>{location.address}</p>
          <p>{location.phone_number}</p>
        </div>
      )
    })
    return (
      <div>
        {location}
      </div>
    );
  }
}

export default LandingPage;
