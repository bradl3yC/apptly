import React, { Component } from 'react';

class ShowLocation extends Component {
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
      <div className="row">
        <div className="col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.state.location.name}</span>
              <p>{this.state.location.phone_number}</p>
              <p>{this.state.location.address}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowLocation;
