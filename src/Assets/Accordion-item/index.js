import React, { useState } from 'react';
import './styles.scss';

export const AccordionItem = (props) => {

  return (
    <div
      className={`accordion-item ${props.isOpened ? ' active' : ''} `} >
      <h3
        className='accordion-item__title'
        onClick={() => props.setId(props.id)}
      >
        { props.question }
      </h3>

      <div className='accordion-item__panel'>
        { props.answer }
      </div>
    </div>
  )
};