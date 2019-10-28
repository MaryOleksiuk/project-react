import React from 'react';
import './styles.scss';
import { Header } from './Components/Header';
import { history } from './navigation/history';
import { Routes } from './navigation';
import { Router } from 'react-router-dom';


export const App = () => {
  return (
    <>
      <Router history={history}>
        <Header />

        <Routes />
      </Router>
    </>
  )
};
