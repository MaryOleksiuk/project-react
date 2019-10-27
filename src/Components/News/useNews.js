import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const posts = await api.getPosts();
      setPosts(posts);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, posts }
};