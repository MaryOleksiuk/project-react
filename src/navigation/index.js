import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { News } from '../components/News';
import { book } from './book';
import { PageNotFound } from '../components/Page-not-found';
import { Login } from '../components/Login';
import { PrivateRoute } from './PrivateRoute';
import { StudentRegistration } from '../components/StudentRegistration';
import { Student } from '../components/Student';
import { People } from '../bus/people';
import { Person } from '../bus/people/person';
import { Film } from '../bus/films/film';
import { Films } from '../bus/films';

// Layouts
import * as Views from '../views';

export const Routes = () => (
  <>
    <Switch>
      <Route
        path={book.news}
        exact
      >
        <Views.Facade>
          <News />
        </Views.Facade>
      </Route>

      <Route
        path={book.unknown}
        exact
      >
        <Views.Facade>
          <PageNotFound />
        </Views.Facade>
      </Route>

      <Route
        path={book.login}
        exact
      >
        <Views.Facade>
          <Login />
        </Views.Facade>
      </Route>

      <Route
        path={book.studentRegistration}
        exact
      >
        <Views.Facade>
          <StudentRegistration />
        </Views.Facade>
      </Route>

      <Route
        path={book.student}
        exact>
        <Views.Facade>
          <Student />
        </Views.Facade>
      </Route>

      <PrivateRoute
        path={book.newsItem}
      >
        <Views.Facade>
          <News />
        </Views.Facade>
      </PrivateRoute>

      <Route
        path={book.people}
        exact>
        <Views.Facade>
          <People />
        </Views.Facade>
      </Route>

      <Route
        path={book.person}
        exact
      >
        <Views.Facade>
          <Person />
        </Views.Facade>
      </Route>

      <Route
        path={book.films}
        exact>
        <Views.Facade>
          <Films />
        </Views.Facade>
      </Route>

      <Route
        path={book.film}
        exact>
        <Views.Facade>
          <Film />
        </Views.Facade>
      </Route>

      <Redirect to={book.unknown} />

    </Switch>
  </>
);