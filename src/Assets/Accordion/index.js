import React, { useState } from 'react';
import { AccordionItem } from '../Accordion-item';
import './styles.scss';

export const Accordion = (props) => {
  const { source } = props;

  const accordionItems = source.map((accordionItem, index) => (
    <AccordionItem
      key={index}
      index={index}
      question={accordionItem.question}
      answer={accordionItem.answer}
    />
  ));

  return (
    <section className='accordion'>
      <h2 className='accordion__title'>Project Brief</h2>

      { accordionItems }
    </section>
  )
};