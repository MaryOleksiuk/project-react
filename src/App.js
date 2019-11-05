import React from 'react';
import './styles.scss';
import { Header } from './Components/Header';
import { history } from './navigation/history';
import { Routes } from './navigation';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './init/store';


export const App = () => {
  return (
    <Provider store={ store }>
      <Router history={history}>
        <Header />

        <Routes />
      </Router>
    </Provider>
  )
};
