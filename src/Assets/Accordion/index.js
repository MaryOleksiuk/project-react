import React from 'react';
import { AccordionItem } from '../Accordion-item';
import './styles.scss';

export const Accordion = () => {
  return (
    <section className='accordion'>
      <h2 className='accordion__title'>Project Brief</h2>
      <AccordionItem />

    </section>
  )
};