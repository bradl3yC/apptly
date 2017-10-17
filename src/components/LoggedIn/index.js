// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Internals
import './index.css';

const logOut = () => {
  localStorage.removeItem('token', 'email')
  window.location.href="/"
}

const LoggedIn = () => (
  <nav className="blue darken-4">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo apptly">&nbsp;&nbsp;Apptly</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/patients_by_date">Today's Patients</Link>
        </li>
        <li>
          <Link to="/patients">All Patients</Link>
        </li>
        <li>
          <a onClick={logOut} className="waves-effect waves-light btn blue lighten-2">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default LoggedIn;
