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
      message: "",
    }
  }

  fetchPatients() {
    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
        'X-For-Date': this.state.date,
      }
    }

    fetch(`http://localhost:8080/patients/show_date`, options)
    .then((response) => {
      if (response.status === 204) {
        this.setState({ message: "No appointments scheduled today!"})
      }
      if (response.status === 200) {
        response.json()
        .then(patients => this.setState({ patients }))
      }
    })
  }


  componentDidMount() {
    this.fetchPatients();
  }

  setDate = (date) => {
    console.log('fired')
    this.setState({ date: moment(date).format('MMMM Do YYYY') })
  }

  render() {

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
         <h5>{this.state.message}</h5>
        {map(this.state.patients, (patient) => (
          <div key={patient.patient.id} className="row">
            <div className="col s12 m3">
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
    )
  }
}

export default Patients;
