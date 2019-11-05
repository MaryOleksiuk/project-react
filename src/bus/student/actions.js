import { types } from './types';

export const studentActions = Object.freeze({
  setStudent: (payload) => ({
      type: types.SET_STUDENT,
      payload
  })
});