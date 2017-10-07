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
    const location = this.state.locations.map(location => {
      return (
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
