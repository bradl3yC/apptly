// Dependencies
import React, { Component } from 'react';

class EditLocation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      phone_number: "",
      address: "",
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/locations/` + this.props.match.params.id)
    .then(response => response.json())
    .then(location => this.setState({ name: location.name, phone_number: location.phone_number, address: location.address }))
  }

  onChangeHandler = (key, value) => {
    this.setState({[key]: value});
  }

  submitLocation = (event) => {
    event.preventDefault()

    const data = {
      name: this.state.name,
      phone_number: this.state.phone_number,
      address: this.state.address,
    }

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    }

    fetch(`http://localhost:8080/locations/${this.props.match.params.id}`, options)
    .then(window.location.href="/")
  }

  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={ event => this.submitLocation(event) }>
          <div className="section">
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
              <div className="input-field col s3">
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
          </div>
          <div className="section">
            <div className="input-field col s4">
              <i className="material-icons prefix">add_location</i>
              <input
                onChange={(event) => this.onChangeHandler('address', event.target.value)}
                value={this.state.address}
                type="text"
                className="validate"
                placeholder="Address:"
              />
            </div>
            <div className="col s2 offset-s1">
              <button type="submit" className="btn-floating btn-large waves-effect waves-light red">
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditLocation;
