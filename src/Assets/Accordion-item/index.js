import React, { useState } from 'react';
import './styles.scss';

export const AccordionItem = (props) => {
  let [ isContentVisible, setContentVisible ] = useState(false);

  return (
    <div
      className={`accordion-item ${isContentVisible ? ' active' : ''} `}>
      <h3
        className='accordion-item__title'
        onClick={() => setContentVisible(isContentVisible = !isContentVisible)}
      >
        { props.question }
      </h3>

      <div className='accordion-item__panel'>
        { props.answer }
      </div>
    </div>
  )
};