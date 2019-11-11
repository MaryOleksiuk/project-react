import React from 'react';
import { book } from '../../navigation/book';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export const Header = () => {

  return (
    <header className='header'>
      <ul>
        <li>
          <NavLink to={book.news} activeClassName='selected'>News</NavLink>
        </li>

        <li>
          <NavLink to={book.studentRegistration} activeClassName='selected'>Student registration</NavLink>
        </li>

        <li>
          <NavLink to={book.student} activeClassName='selected' exact>Student</NavLink>
        </li>

        <li>
          <NavLink to={book.people} activeClassName='selected' exact>People</NavLink>
        </li>
      </ul>
    </header>
  )
};