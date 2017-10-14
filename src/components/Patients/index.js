// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Input } from 'react-materialize';
import map from 'lodash/map';
import moment from 'moment';

class Patients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: [],
      date: moment([]).format('MMMM Do YYYY'),
      message: "No Appointments Today!",
    }
  }

  fetchPatients(date) {

    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
        'X-For-Date': date,
      }
    }

    fetch(`https://apptly-api.herokuapp.com/patients/show_date`, options)
    .then(response => response.json())
    .then(patients => this.setState({ patients }))
  }

  componentDidMount() {
    this.fetchPatients(this.state.date);
  }

  setDate = (date) => {
    const formattedDate = moment(date).format('MMMM Do YYYY')
    this.fetchPatients(formattedDate)

    this.setState({ date: formattedDate })
  }

  render() {
    console.log(this.state.patients)
    return (
      <div>
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
          <div key={patient.id} className="row">
            <div className="col s12 m3">
              <div className="card blue darken-2">
                <div className="card-content white-text">
                  <span className="card-title">{patient.name}</span>
                  <p>{patient.phone_number}</p>
                  <p>{patient.address}</p>
                </div>
                <div className="card-action">
                  <Link to={`/patients/${patient.id}`}>View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Patients;
