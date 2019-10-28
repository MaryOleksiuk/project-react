import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from '../Components/News';
import { book } from './book';
import { Home } from '../Views/Home';
import { PageNotFound } from '../Components/Page-not-found';

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

      <Route
        component={News}
        path={book.newsItem}
        exact
        restricted={false}
      />

      <Route
        component={PageNotFound}
        path={book.unknown}
        exact
        restricted={false}
        />

      <Redirect to={book.unknown} />
    </Switch>
  </>
);