import React from 'react';
import './styles.scss';


export const Tag = (props) => {
  return (
    <a className='tag'>
      { props.source }
    </a>
  )
};
