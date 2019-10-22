import React from 'react';
import './styles.scss';

export const AccordionItem = (props) => {
  return (
    <section className='accordion-item'>
      <h3 className='accordion-item__title'>
        { props.question }
      </h3>

      <div className='accordion-item__panel'>
        { props.answer }
      </div>
    </section>
  )
};