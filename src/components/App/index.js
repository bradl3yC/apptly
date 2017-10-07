// Dependencies
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Externals
import LandingPage from '../LandingPage';
import BaseLayout from '../BaseLayout';
import Show from '../Show';

const App = () => (
  <BrowserRouter>
    <Switch>
      <BaseLayout>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/locations/:id" component={Show}/>
      </BaseLayout>
    </Switch>
  </BrowserRouter>
)

export default App;
