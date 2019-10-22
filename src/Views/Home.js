import React from 'react';
import { News } from '../Components/News';

import data from '../source';
import { Accordion } from '../Assets/Accordion';

export const Home = () => {
  return (
    <>
      <News source={ data } />
      <Accordion />
    </>
  )
};
