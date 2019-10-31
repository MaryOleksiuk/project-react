import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from '../Components/News';
import { book } from './book';
import { Home } from '../Views/Home';
import { PageNotFound } from '../Components/Page-not-found';
import { Login } from '../Components/Login';
import { PrivateRoute } from './PrivateRoute';
import {StudentRegistration} from '../Components/StudentRegistration';

export const Routes = () => (
  <>
    <Switch>
      <Route
        component={Home}
        path={book.root}
        exact
      />

      <Route
        component={News}
        path={book.news}
        exact
        restricted={false}
      />

      <Route
        component={PageNotFound}
        path={book.unknown}
        exact
        restricted={false}
        />

      <Route
        component={Login}
        path={book.login}
        exact
      />

      <Route
        component={StudentRegistration}
        path={book.studentRegistration}
        exact
      />

      <PrivateRoute
        path={book.newsItem}
      >
        <News />
      </PrivateRoute>

      <Redirect to={book.unknown} />

    </Switch>
  </>
);