import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamePage from './gamePage';
import HomePage from './homePage';

export default function pages() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          path="/gamePage"
          component={GamePage}
        />
      </Switch>
    </Router>
  );
}
