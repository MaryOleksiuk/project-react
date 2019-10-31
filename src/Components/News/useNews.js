import { useState, useEffect } from 'react';
import { api } from './api';
import moment from 'moment';
import {useParams} from 'react-router-dom';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  const [ isLoading, setLoading ] = useState(true);

  const getPosts = () => {
    (async () => {
      const posts = await api.getPosts();
      localStorage.removeItem('response');
      localStorage.removeItem('lastUpdated');

      localStorage.setItem('response', JSON.stringify(posts));
      localStorage.setItem('lastUpdated', moment().format('HH:mm:ss'));
    })();
  };

  useEffect(() => {
    setLoading(true);

    const { lastUpdated, response } = localStorage;

    let isLocalStorageRequest = false;

    if(lastUpdated && posts) {
      const now = moment().format('HH:mm:ss');

      const minimumDiff = 10;
      const diffInMins = moment.utc(now, 'HH:mm:ss').diff(moment.utc(lastUpdated, 'HH:mm:ss'), 'minutes');

      isLocalStorageRequest = diffInMins < minimumDiff;

      isLocalStorageRequest ? setPosts(JSON.parse(response)) : getPosts();
      setLoading(false);
    }
  }, []);

  return { isLoading, posts, setLoading }
};