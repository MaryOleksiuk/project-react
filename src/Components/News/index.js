import React from 'react';
import './styles.scss';
import { Article } from '../Article';

export const News = (props) => {
  const { source } = props;

  const articles = source.map((obj, index) => (
    <Article {...obj} />
  ));
  return (
    <section className='news'>
      { articles }
    </section>
  )
};
