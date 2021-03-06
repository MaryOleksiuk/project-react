import { types } from './types';
import { api } from '../../api';

export const filmsActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.FILMS_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.FILMS_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.FILMS_FILL,
      payload
    }
  },
  fillFilm: (payload) => {
    return {
      type: types.FILM_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.FILMS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },
  fetchAsync: () => async(dispatch) => {
    dispatch({
      type: types.FILMS_FETCH_ASYNC
    });

    dispatch(filmsActions.startFetching());

    const response = await api.films.fetch();

    if(response.status === 200) {
      const { results } = await response.json();

      dispatch(filmsActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  },

  fetchAsyncFilm: (id) => async(dispatch) => {
    dispatch({
      type: types.FILM_FETCH_ASYNC
    });

    dispatch(filmsActions.startFetching());

    const response = await api.film.fetch(id);

    if(response.status === 200) {
      const { results } = await response.json();

      dispatch(filmsActions.fillFilm(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  }
});