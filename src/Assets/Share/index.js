import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';


export const Share = () => {
  return (
    <span className='share'>
      <FontAwesomeIcon icon={ faShareAlt } />
    </span>
  )
};