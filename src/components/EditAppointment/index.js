// Dependencies
import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import moment from 'moment';
import { withRouter } from "react-router-dom";

class EditAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointment: [],
      date_time: "",
      patient: [],
      date: "",
      time: "",
    }
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  async submitAppointment(event) {
    event.preventDefault()

    const data = {
      date_time: this.state.date + " " + this.state.time + "-0400",
      patient_id: this.props.match.params.id,
    }

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }

    const response = await fetch(`https://apptly-api.herokuapp.com/appointments/${this.state.appointment.id}`, options)
    if (response.status === 200) {
      window.location.href=`/patients/${this.props.match.params.id}`
    }

  }

  componentDidMount() {
    fetch(`https://apptly-api.herokuapp.com/appointments/${this.props.match.params.appointment_id}`)
    .then(response => response.json())
    .then(appointment => this.setState({ appointment, date_time: appointment.date_time, patient: appointment.patient }))
  }

  render() {
    return (
      <Row>
        <h5>Editing {moment(this.state.appointment.date_time).format('MMMM Do YYYY, h:mm a')} appointment for {this.state.patient.name}</h5>
         <Input name="on" placeholder="Date:" type="date" onChange={ event => this.onChangeHandler("date", event.target.value) } />
         <Input name="on" placeholder="Time:" type="time" onChange={ event => this.onChangeHandler("time", event.target.value) } />
         <div className="section">
           <Button floating className='blue lighten-3' waves='light' icon='add' onClick={ event => this.submitAppointment(event) } />
         </div>
      </Row>
    );
  }
}

export default withRouter(EditAppointment);
