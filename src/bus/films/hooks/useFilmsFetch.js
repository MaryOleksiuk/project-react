import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filmsActions } from '../actions';

export const useFilmsFetch = () => {
  const { data, isFetching, error } = useSelector((state) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filmsActions.fetchAsync());
  }, [dispatch]);

  return {
    data,
    isFetching,
    error
  }
};

