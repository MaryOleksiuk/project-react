import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { book } from '../../navigation/book';
import './styles.scss';

export const Logout = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: book.login }};

  let logout = () => {
    localStorage.setItem('authenticated', 'false');
    history.replace(from);
  };

  return (
    <>
      <button onClick={logout}>Log out</button>
    </>
  )
};