// Dependencies
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class CreatePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phone_number: "",
      address: "",
      home_health_company: "",
      assistant: "",
      visit_frequency: "",
    }
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  submitPatient = (event) => {
    event.preventDefault()

    const data = {
      name: this.state.name,
      phone_number: this.state.phone_number,
      address: this.state.address,
      home_health_company: this.state.home_health_company,
      assistant: this.state.assistant,
      visit_frequency: this.state.visit_frequency,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-User-Token': localStorage.token,
        'X-User-Email': localStorage.email,
      },
      body: JSON.stringify(data)
    }

    fetch('https://apptly-api.herokuapp.com/patients', options)
    .then(this.props.history.push('/patients'))
  }

  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={ event => this.submitPatient(event) }>
          <div className="row">
            <div className="input-field col s3">
              <i className="material-icons prefix">account_circle</i>
              <input
                onChange={(event) => this.onChangeHandler('name', event.target.value)}
                value={this.state.name}
                type="text"
                className="validate"
                placeholder="Name:"
              />
            </div>
            <div className="input-field col s2">
              <i className="material-icons prefix">phone</i>
              <input
                onChange={(event) => this.onChangeHandler('phone_number', event.target.value)}
                value={this.state.phone_number}
                type="tel"
                className="validate"
                placeholder="Phone Number:"
              />
            </div>
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">add_location</i>
            <input
              onChange={(event) => this.onChangeHandler('address', event.target.value)}
              value={this.state.address}
              type="text"
              className="validate"
              placeholder="Address:"
            />
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">favorite_border</i>
            <input
              onChange={(event) => this.onChangeHandler('home_health_company', event.target.value)}
              value={this.state.home_health_company}
              type="text"
              className="validate"
              placeholder="Home Health Company:"
            />
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">face</i>
            <input
              onChange={(event) => this.onChangeHandler('assistant', event.target.value)}
              value={this.state.assistant}
              type="text"
              className="validate"
              placeholder="Assistant:"
            />
          </div>
          <div className="input-field col s3">
            <i className="material-icons prefix">av_timer</i>
            <input
              onChange={(event) => this.onChangeHandler('visit_frequency', event.target.value)}
              value={this.state.visit_frequency}
              type="text"
              className="validate"
              placeholder="Visit Frequency:"
            />
          </div>
          <div className="col s2 offset-s1">
            <button type="submit" className="btn-floating btn-large waves-effect waves-light blue lighten-3">
              <i className="material-icons">add</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePatient);
