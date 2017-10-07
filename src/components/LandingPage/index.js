import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
    console.log(this.state.locations)
    const location = this.state.locations.map((location, index) => {
      return (
        <div key={index}>
          <Link to={`/locations/${location.id}`}>{location.name}</Link>
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
