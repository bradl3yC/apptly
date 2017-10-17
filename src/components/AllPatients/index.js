// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

class AllPatients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: [],
    }
  }

  async componentDidMount() {

    const options = {
      method: 'GET',
      headers: {
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
      }
    }

    const response = await fetch(`https://apptly-api.herokuapp.com/patients`, options);
    const patients = await response.json();
    await this.setState({ patients })
  }

  render() {
    return (
      <div>
        <Link to="/add" className="waves-effect waves-light blue lighten2 btn">
          Add Patient
        </Link>
        {map(this.state.patients, (patient) => (
          <div key={patient.id} className="row">
            <div className="col s5 m3">
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

export default AllPatients;
