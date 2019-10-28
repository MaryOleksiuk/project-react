import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Article } from '../Article';
import { useNews } from './useNews';
import { Loader } from '../../Assets/Loader';
import {book} from '../../navigation/book';

export const News = () => {
  const { posts } = useNews();

  const [ isLoading, setLoading ] = useState(true);

  const [ data, setData ] = useState([]);

  const history = useHistory();
  const { id } = useParams();

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


  const articles = data.map((item) => {
    return <Article {...item} key={item.objectId}/>
  });

  if((data.length === 0) && (isLoading === false)) {
    history.push(book.unknown);
  }

  return (
    <>
      <section className='news'>
        { isLoading ? <Loader/> : articles }
      </section>
    </>
  )
};
