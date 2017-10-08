// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Externals
import LandingPage from '../LandingPage';
import BaseLayout from '../BaseLayout';
import ShowLocation from '../ShowLocation';
import CreateLocation from '../CreateLocation';
import EditLocation from '../EditLocation';
import CreateNote from '../CreateNote';
import EditNote from '../EditNote';

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/locations/edit/:id" component={EditLocation}/>
        <Route exact path="/locations/:id" component={ShowLocation}/>
        <Route exact path="/locations/:id/notes/create" component={CreateNote}/>
        <Route exact path="/locations/:id/notes/:note_id/edit" component={EditNote}/>
        <Route path="/add" component={CreateLocation}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
