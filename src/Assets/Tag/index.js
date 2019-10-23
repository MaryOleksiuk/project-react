import React from 'react';
import './styles.scss';


export const Tag = (props) => {
  return (
    <button className='tag'>
      { props.source }
    </button>
  )
};
