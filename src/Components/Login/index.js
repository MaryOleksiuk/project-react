import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Login = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' }};

  let login = () => {
    localStorage.setItem('authenticated', 'true');
    history.replace(from);
  };

  return (
    <>
      <p>You must log in to see full article</p>
      <button onClick={login}>Log in</button>
    </>
  )
};