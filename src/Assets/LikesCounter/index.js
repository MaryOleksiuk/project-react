import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const LikesCounter = (props) => {
  return (
    <span className='likes'>
      <FontAwesomeIcon icon={faHeart} /> <span className='likes__count'>{ props.counts }</span>
    </span>
  )
};