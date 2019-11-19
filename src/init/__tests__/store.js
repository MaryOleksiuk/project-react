import { combineReducers, createStore } from 'redux';

import { store } from '../store';
import { studentReducer as student } from '../../bus/student/reducer';
import { peopleReducer as people } from '../../bus/people/reducer';
import { filmsReducer as films } from '../../bus/films/reducer';

export const referenceRootReducer = combineReducers({
  student,
  people,
  films
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
  it('should have valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});