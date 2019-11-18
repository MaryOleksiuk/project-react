import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filmsActions } from '../actions';

export const useFilmFetch = (id) => {
  const { film, isFetching, error } = useSelector((state) => state.films);
  const { data } = useSelector((state) => state.films);

  const currentFilm = data[id-1];

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentFilm) {
      dispatch(filmsActions.fillFilm(currentFilm));
    } else {
      dispatch(filmsActions.fetchAsyncFilm(id));
    }
  }, [dispatch, currentFilm, id]);

  return {
    film,
    isFetching,
    error
  }
};

