import { types } from './types';
import { api } from '../../api';

export const peopleActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.PEOPLE_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.PEOPLE_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.PEOPLE_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.PEOPLE_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.PEOPLE_FETCH_ASYNC
    });

    dispatch(peopleActions.startFetching());

    const response = await api.people.fetch();

    if (response.status === 200) {
      const { results } = await response.json();

      dispatch(peopleActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(peopleActions.setFetchingError(error));
    }

    dispatch(peopleActions.stopFetching());
  },

  // Person actions
  fillPerson: (payload) => {
    return {
      type: types.PERSON_FILL,
      payload
    }
  },

  fetchAsyncPerson: (id) => async (dispatch) => {
    dispatch({
      type: types.PERSON_FETCH_ASYNC
    });

    dispatch(peopleActions.startFetching());

    const response = await api.person.fetch(id);

    if (response.status === 200) {
      const { results } = await response.json();

      dispatch(peopleActions.fillPerson(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(peopleActions.setFetchingError(error));
    }

    dispatch(peopleActions.stopFetching());
  },
});