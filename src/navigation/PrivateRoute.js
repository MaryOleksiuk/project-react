import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { book } from './book';

export const PrivateRoute = ({ children, ...rest}) => {

  const authenticated = !(localStorage.getItem('authenticated') === null) ? JSON.parse(localStorage.getItem('authenticated')) : false;

  console.log('privateroute', authenticated);

  return (
    <Route
      {...rest}
      render={({location}) => (
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: book.login,
              state: {from: location}
            }}
          />
        )
      )
    }
    />
  );
};