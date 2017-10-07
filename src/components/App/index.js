// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Externals
import LandingPage from '../LandingPage';
import BaseLayout from '../BaseLayout';
import ShowLocation from '../ShowLocation';
import CreateLocation from '../CreateLocation';

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/locations/:id" component={ShowLocation}/>
        <Route path="/add" component={CreateLocation}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
