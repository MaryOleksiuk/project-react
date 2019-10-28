import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './styles.scss';

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
      <section className='login'>
        <p>You must log in to see full article</p>
        <button onClick={login}>Log in</button>
      </section>
    </>
  )
};