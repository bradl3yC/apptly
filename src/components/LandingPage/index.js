// Dependencies
import React, { Component } from 'react';
import { Parallax } from 'react-materialize';
// Externals
import background1 from '../../images/background1.jpg';
import background2 from '../../images/background2.png';
import background3 from '../../images/background3.jpg';
// Internals
import './index.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br /><br />
              <h1 className="header center blue-text text-lighten-2 apptly">Apptly</h1>
              <div className="row center">
                <h5 className="header col s12 light">A patient appointment management service</h5>
              </div>
              <br /><br />
            </div>
          </div>
          <div className="parallax">
            <Parallax imageSrc={background1} />
          </div>
        </div>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Integration!</h5>
                  <p className="light">The days of paper planners and manually entering addresses into a GPS are over.  By integrating with Google Maps, we make finding the patients location easy!</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">Single interface</h5>
                  <p className="light">This interface is a single source of information vital to finding your patients resience and having all of the pertinent information to their appointment. </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Easy to Use!</h5>
                  <p className="light">Our interace is designed for ease of use.  By being able to enter all of the patient information on one screen, time spent building a patient profile can be kept to a minimum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h5 className="header col s12 light">A modern solution for managing Home Health Care.</h5>
              </div>
            </div>
          </div>
          <div className="parallax">
            <Parallax imageSrc={background2} />
          </div>
        </div>

        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 center">
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Contact Us</h4>
                <p className="left-align light">Apptly is here to provide you more information, answer any questions you may have and create an effective solution for your Home Health needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">

              </div>
            </div>
          </div>
          <div className="parallax">
            <Parallax imageSrc={background3} />
          </div>
        </div>
        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="http://bradleyryan.io">BradleyRyan.io</a></li>
                  <li><a className="white-text" href="https://www.linkedin.com/in/brad-conley/">LinkedIn</a></li>
                  <li><a className="white-text" href="https://github.com/bradl3yC">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
          </div>
        </footer>
      </div>
    )
  }
}


export default LandingPage;
