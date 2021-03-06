import { combineReducers } from 'redux';

import { studentReducer as student} from '../bus/student/reducer';
import { peopleReducer as people} from '../bus/people/reducer';
import { filmsReducer as films} from '../bus/films/reducer';

export const rootReducer = combineReducers({
  student,
  people,
  films
});