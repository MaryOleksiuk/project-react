import React from 'react';
import { book } from '../../navigation/book';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export const Header = () => {

  return (
    <header className='header'>
      <ul>
        <li>
          <NavLink to={book.root} exact activeClassName='selected'>Home</NavLink>
        </li>

        <li>
          <NavLink to={book.news} activeClassName='selected'>News</NavLink>
        </li>

        <li>
          <NavLink to={book.studentRegistration} activeClassName='selected'>Student registration</NavLink>
        </li>
      </ul>
    </header>
  )
};