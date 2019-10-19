import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


export const CommentsCounter = () => {
  return (
    <span className='comments'>
      <FontAwesomeIcon icon={faComment} /> <span className='comments__count'>10</span>
    </span>
  )
};