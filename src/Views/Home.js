import React from 'react';
import accordionData from '../data/accordion-data';
import { Accordion } from '../Assets/Accordion';

export const Home = () => {
  return (
    <>
      <Accordion source={ accordionData } />
    </>
  )
};
