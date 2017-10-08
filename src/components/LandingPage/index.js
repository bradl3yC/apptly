// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map'

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
    return (
      <div>
        {map(this.state.locations, (location) => (
          <div key={location.id} className="row">
            <div className="col s12 m3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{location.name}</span>
                  <p>{location.phone_number}</p>
                  <p>{location.address}</p>
                </div>
                <div className="card-action">
                  <Link to={`/locations/${location.id}`}>View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default LandingPage;
