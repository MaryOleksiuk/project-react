import React, { useState } from 'react';
import './styles.scss';

export const AccordionItem = (props) => {
  let [ isContentVisible, setContentVisible ] = useState(false);

  const handleClick = () => {
    setContentVisible(isContentVisible = !isContentVisible);
  };

  return (
    <div
      className={`accordion-item ${isContentVisible ? ' active' : ''} `} >
      <h3
        className='accordion-item__title'
        onClick={handleClick}
      >
        { props.question }
      </h3>

      <div className='accordion-item__panel'>
        { props.answer }
      </div>
    </div>
  )
};