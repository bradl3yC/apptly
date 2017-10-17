// Dependencies
import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { withRouter } from "react-router-dom";


class CreateAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: "",
      time: "",
    };
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  submitAppointment = (event) => {
    event.preventDefault()

    const data = {
      date_time: this.state.date + " " + this.state.time + "-0400",
      patient_id: this.props.match.params.id,
    }

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    }

    fetch('https://apptly-api.herokuapp.com/appointments', options)
    .then(this.props.history.push(`/patients/${this.props.match.params.id}`))
  }

  render() {
    return (
      <Row>
    	   <Input name="on" placeholder="Date:" type="date" onChange={ event => this.onChangeHandler("date", event.target.value) } />
    	   <Input name="on" placeholder="Time:" type="time" onChange={ event => this.onChangeHandler("time", event.target.value) } />
         <div className="section">
           <Button floating className='blue lighten-3' waves='light' icon='add' onClick={ event => this.submitAppointment(event) } />
         </div>
      </Row>
    )
  }
}

export default withRouter(CreateAppointment);
