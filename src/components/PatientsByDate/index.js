// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input } from 'react-materialize';
import map from 'lodash/map';
import moment from 'moment';
import GoogleMapReact from 'google-map-react';
// Externals
import MapLocation from '../MapLocation';
// Internals
import './index.css';

class PatientsByDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: [],
      date: moment([]).format('MMMM Do YYYY'),
      locations: [],
    }
  }

  async getCoordinates(location, name) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(location)}&key=${process.env.REACT_APP_GMAPS_API}`)
    const coords = await response.json();
    await this.setState({ locations: this.state.locations.concat([[name, coords.results[0].geometry.location.lat, coords.results[0].geometry.location.lng]])})
  }

  async fetchPatients(date) {

    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
        'X-For-Date': date,
      }
    }

    const response = await fetch(`https://apptly-api.herokuapp.com/patients/show_date`, options);
    const patients = await response.json();
    this.setState({ patients })
    for (var i = 0; i < this.state.patients.length; i++) {
      this.getCoordinates(this.state.patients[i].patient.address, this.state.patients[i].patient.name)
    }
  }

  setDate = (date) => {
    this.setState({ locations: [] })
    const formattedDate = moment(date).format('MMMM Do YYYY')
    this.fetchPatients(formattedDate)
    this.setState({ date: formattedDate })
  }

  componentDidMount() {
    this.fetchPatients(this.state.date);
  }

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="patients-by-date">
            <h5>Appointments for:</h5>
            <Row>
              <Input
                name='on'
                type='date'
                value={this.state.date}
                onChange={ event => this.setDate(Date.parse(event.target.value))}
              />
            </Row>
            {this.state.patients.length > 0 ? "" : <h5>No Appointments Today!</h5>}
            {map(this.state.patients, (patient) => (
              <div key={patient.patient.id} className="row">
                <div className="col s8 m6">
                  <div className="card blue darken-2">
                    <div className="card-content white-text">
                      <span className="card-title">{patient.patient.name}</span>
                      <p>{patient.patient.phone_number}</p>
                      <p>{patient.patient.address}</p>
                    </div>
                    <div className="card-action">
                      <Link to={`/patients/${patient.patient.id}`}>View</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col s6">
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{key: process.env.REACT_APP_GMAPS_API}}
              center={[28.842318, -82.38335599999999]}
              zoom={11}
              >
                {map(this.state.locations, (location, index) => (
                  <MapLocation key={index} lat={location[1]} lng={location[2]} text={location[0]}/>
                ))}
              </GoogleMapReact>
            </div>
        </div>
      </div>
    );
  }
}

export default PatientsByDate;
