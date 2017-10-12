// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
// Externals
import Note from '../Note';
import Appointment from '../Appointment';

class ShowPatient extends Component {
  constructor(props) {
    super (props)
    this.state = {
      patient: [],
    }
  }

  deletePatient = () => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
      }
    }

    fetch('http://localhost:8080/patients/' + this.props.match.params.id, options)
    .then(window.location.href='/patients')
  }

  componentDidMount() {

    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
      }
    }

    fetch('http://localhost:8080/patients/' + this.props.match.params.id, options)
    .then(response => response.json())
    .then(patient => this.setState({ patient }))
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m5">
          <div className="card blue darken-2">
            <div className="card-content white-text">
              <span className="card-title">{this.state.patient.name}</span>
              <p>Phone: {this.state.patient.phone_number}</p>
              <p>Address: {this.state.patient.address}</p>
              <p>Home Health Company: {this.state.patient.home_health_company}</p>
              <p>Assistant: {this.state.patient.assistant}</p>
              <p>Visit Frequency: {this.state.patient.visit_frequency}</p>
            </div>
            <div className="card-action">
              <Link to={`/patients/edit/${this.state.patient.id}`}>Edit</Link>
              <a onClick={() => this.deletePatient()} className="waves-effect waves-light btn red">delete</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s4">
            <h5>Appointments:</h5>
            <ul className="collection">
              {map(this.state.patient.appointments, (appointment) => (
                <Appointment key={appointment.id} appointment={appointment} />
              ))}
            </ul>
            <a href={`/patients/${this.state.patient.id}/appointments/create`} className="secondary-content">
              <i className="material-icons">add</i>
            </a>
            <div className="section">
              <h5>Notes:</h5>
              <ul className="collection">
                {map(this.state.patient.notes, (note) => (
                  <Note key={note.id} note={note} />
                ))}
              </ul>
              <a href={`/patients/${this.state.patient.id}/notes/create`} className="secondary-content">
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default ShowPatient;
