import React from 'react';
import './styles.scss';
import { Article } from '../Article';


export const News = () => {
  return (
    <section className='news'>
      <Article />
      <Article />
      <Article />
    </section>
  )
};
