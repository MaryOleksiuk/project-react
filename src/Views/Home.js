import React from 'react';
import { News } from '../Components/News';

import newsData from '../data/news-data';
import accordionData from '../data/accordion-data';
import { Accordion } from '../Assets/Accordion';

export const Home = () => {
  return (
    <>
      <News source={ newsData } />
      <Accordion source={ accordionData } />
    </>
  )
};
