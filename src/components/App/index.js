// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Externals
import LandingPage from '../LandingPage';
import BaseLayout from '../BaseLayout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={LandingPage}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
