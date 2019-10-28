import React from 'react';
import { book } from '../../navigation/book';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <NavLink to={book.root}>Home</NavLink>
        </li>

        <li>
          <NavLink to={book.news}>News</NavLink>
        </li>
      </ul>
    </header>
  )
};