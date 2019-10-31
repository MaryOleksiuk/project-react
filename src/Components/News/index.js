import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';
import { Loader } from '../../Assets/Loader';
import { book } from '../../navigation/book';
import {Logout} from '../Logout';

export const News = () => {
  const { posts, setLoading, isLoading } = useNews();

  const [ data, setData ] = useState([]);

  const { id } = useParams();

  const history = useHistory();
  const authenticated = !(localStorage.getItem('authenticated') === null) ? JSON.parse(localStorage.getItem('authenticated')) : false;

  useEffect(() => {
    if (id) {
      setData(posts.filter(post => {
        return post.objectId === id;
      }));
    } else {
      setData(posts);
    }

    (posts.length > 0) ? setLoading(false) : setLoading(true);

  }, [posts, id]);

  if((data.length === 0) && (isLoading === false)) {
    history.push(book.unknown);
  }


  const articles = data.map((item) => {
    return <Article {...item} key={item.objectId} />
  });

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
