import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from '../components/News';
import { book } from './book';
import { Home } from '../Views/Home';
import { PageNotFound } from '../components/Page-not-found';
import { Login } from '../components/Login';
import { PrivateRoute } from './PrivateRoute';
import { StudentRegistration } from '../components/StudentRegistration';
import { Student } from '../components/Student';

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

      <Route
        component={Student}
        path={book.student}
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