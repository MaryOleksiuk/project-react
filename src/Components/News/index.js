import React from 'react';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';
import { Loader } from '../../Assets/Loader';

export const News = () => {
  const { isLoading, posts } = useNews();

  const articles = posts.map((obj, index) => (
    <Article {...obj} key={index} />
  ));

  return (
    <>

      <section className='news'>
        { isLoading ? <Loader/> : articles }
      </section>
    </>
  )
};
