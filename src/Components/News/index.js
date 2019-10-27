import React from 'react';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';

export const News = () => {
  const { posts } = useNews();

  const articles = posts.map((obj, index) => (
    <Article {...obj} key={index} />
  ));
  return (
    <section className='news'>
      { articles }
    </section>
  )
};
