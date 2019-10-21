import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLikesCounter } from './useLikesCounter';


export const LikesCounter = (props) => {
  const { counter, increase } = useLikesCounter(props.counts);

  return (
    <span className='likes'>
      <FontAwesomeIcon icon={faHeart} onClick={increase} /> <span className='likes__count'>{ counter }</span>
    </span>
  )
};