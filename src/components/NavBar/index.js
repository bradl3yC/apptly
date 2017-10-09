// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="blue darken-4">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">AppointmentKeeper</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/add">Add Patient</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
