// Dependencies
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  async submitLogin(event) {

    const headers = new Headers()
    headers.append('Content-type', 'application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(this.state)
    }


    const response = await fetch('http://localhost:8080/sessions', options);
    const status = await response.status;

    if (status === 201) {
      const body = await response.json()
      localStorage.setItem('token', body.authentication_token)
      localStorage.setItem('email', body.email)
    } else {
      console.log(status, options)
    }

  }

  render() {
    console.log(localStorage.token, localStorage.email)
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input onChange={ event => this.onChangeHandler("email", event.target.value) } id="email" type="email" className="validate" placeholder="Email:"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input onChange={ event => this.onChangeHandler("password", event.target.value) } id="password" type="password" className="validate" placeholder="Password:"/>
            </div>
          </div>
          <a onClick={ event => this.submitLogin(event) } className="waves-effect waves-light btn blue lighten-2"><i className="material-icons left">check</i>Login</a>
        </form>
      </div>
    );
  }
}

export default Login;
