import React from 'react';
import { News } from '../Components/News';

import data from '../source';

export const Home = () => {
  return (
    <News source={ data }/>
  )
};
