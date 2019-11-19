import { studentReducer } from "../reducer";
import { studentActions } from "../actions";

describe('Student reducer', () => {
  it('should return initial state by default', () => {
    expect(studentReducer(void 0, {})).toMatchSnapshot();
  });

  it('should handle start fetching action', () => {
    expect(studentReducer(void 0, studentActions.setStudent())).toMatchSnapshot();
  });
});