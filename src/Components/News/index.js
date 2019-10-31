import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';
import { Loader } from '../../Assets/Loader';
import { book } from '../../navigation/book';
import {Logout} from '../Logout';

export const News = () => {
  const { id, isLoading, posts } = useNews();

  const history = useHistory();

  const authenticated = !(localStorage.getItem('authenticated') === null) ? JSON.parse(localStorage.getItem('authenticated')) : false;

  const articles = posts.map((item) => {
    return <Article {...item} key={item.objectId} />
  });

  if((posts.length === 0) && (isLoading === false)) {
    history.push(book.unknown);
  }

  return (
    <>
      <section className="news">
        <h1>News</h1>
        {(authenticated && id) ? <Logout /> : ''}

        <div className='news__content'>
          { isLoading ? <Loader/> : articles }
        </div>
      </section>
    </>
  )
};
