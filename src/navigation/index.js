import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { News } from '../Components/News';
import { book } from './book';
import { Home } from '../Views/Home';

export const Routes = () => (
  <>
    <Route
      component={Home}
      path={book.root}
      exact
      restricted={false}
    />
    <Switch>
      <Route
        component={News}
        path={book.news}
        exact
        restricted={false}
      />
    </Switch>
  </>
);