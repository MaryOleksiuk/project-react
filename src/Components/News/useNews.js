import { useState, useEffect } from 'react';
import { api } from './api';
import moment from 'moment';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const { lastUpdated, response } = localStorage;

    if(lastUpdated && posts) {
      const now = moment().format('HH:mm:ss');

      const minimumDiff = 10;
      const diffInMins = moment.utc(now, 'HH:mm:ss').diff(moment.utc(lastUpdated, 'HH:mm:ss'), 'minutes');

      if(diffInMins <= minimumDiff) {
        setPosts(JSON.parse(response));
      } else {
        getPosts();
      }
    } else {
      getPosts();
    }

    getPosts();
  }, []);

  const getPosts = () => {
    (async () => {
      const posts = await api.getPosts();
      localStorage.clear();
      localStorage.setItem('response', JSON.stringify(posts));
      localStorage.setItem('lastUpdated', moment().format('HH:mm:ss'));
      setPosts(posts);
    })();
  };

  return { posts }
};