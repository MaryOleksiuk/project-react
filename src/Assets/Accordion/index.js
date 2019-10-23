import React, { useState } from 'react';
import { AccordionItem } from '../Accordion-item';
import './styles.scss';

export const Accordion = (props) => {
  const { source } = props;

  const [ id, setId ] = useState(false);

  const accordionItems = source.map((accordionItem, index) => (
    <AccordionItem
      key={index}
      question={accordionItem.question}
      answer={accordionItem.answer}
      id={index}
      isOpened={id === index}
      setId={setId}
    />
  ));

  return (
    <section className='accordion'>
      <h2 className='accordion__title'>Project Brief</h2>

      { accordionItems }
    </section>
  )
};