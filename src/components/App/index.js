// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Externals
import LandingPage from '../LandingPage';
import BaseLayout from '../BaseLayout';
import ShowPatient from '../ShowPatient';
import CreatePatient from '../CreatePatient';
import EditPatient from '../EditPatient';
import CreateNote from '../CreateNote';
import EditNote from '../EditNote';
import EditAppointment from '../EditAppointment';
import CreateAppointment from '../CreateAppointment';

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/patients/edit/:id" component={EditPatient}/>
        <Route exact path="/patients/:id" component={ShowPatient}/>
        <Route exact path="/patients/:id/notes/create" component={CreateNote}/>
        <Route exact path="/patients/:id/appointments/create" component={CreateAppointment}/>
        <Route exact path="/patients/:id/notes/:note_id/edit" component={EditNote}/>
        <Route exact path="/patients/:id/appointments/:appointment_id/edit" component={EditAppointment}/>
        <Route path="/add" component={CreatePatient}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
