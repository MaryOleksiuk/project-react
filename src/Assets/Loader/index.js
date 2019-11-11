import React from 'react';
import './styles.scss';

export const Loader = () => {
  return (
    <div className='loader'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loader" />
      <p>Loading</p>
    </div>
  )
};