import { useState, useEffect } from 'react';
import { api } from './api';
import moment from 'moment';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const { lastUpdated, response } = localStorage;

    // Define if Request from Local Storage is needed
    let isLocalStorageRequest = false;

    if(lastUpdated && posts) {
      const now = moment().format('HH:mm:ss');
      const minimumDiff = 10;
      const diffInMins = moment.utc(now, 'HH:mm:ss').diff(moment.utc(lastUpdated, 'HH:mm:ss'), 'minutes');

      (diffInMins <= minimumDiff) ? isLocalStorageRequest = true : isLocalStorageRequest = false;
    }

    isLocalStorageRequest ? setPosts(JSON.parse(response)) : getPosts();

  }, []);

  const getPosts = () => {
    (async () => {
      const posts = await api.getPosts();
      localStorage.removeItem('response');
      localStorage.removeItem('lastUpdated');

      localStorage.setItem('response', JSON.stringify(posts));
      localStorage.setItem('lastUpdated', moment().format('HH:mm:ss'));
      setPosts(posts);
    })();
  };

  return { posts }
};