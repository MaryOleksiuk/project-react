import { peopleReducer } from "../reducer";
import { peopleActions } from "../actions";

describe('People reducer', () => {
  it('should return initial state by default', () => {
    expect(peopleReducer(void 0, {})).toMatchSnapshot();
  });

  it('should handle start fetching action', () => {
    expect(peopleReducer(void 0, peopleActions.startFetching())).toMatchSnapshot();
  });

  it('should handle stop fetching action', () => {
    expect(peopleReducer(void 0, peopleActions.stopFetching())).toMatchSnapshot();
  });

  it('should handle fill action', () => {
    expect(peopleReducer(void 0, peopleActions.fill())).toMatchSnapshot();
  });

  it('should handle fill person action', () => {
    expect(peopleReducer(void 0, peopleActions.fillPerson())).toMatchSnapshot();
  });

  it('should handle set fetching error', () => {
    expect(peopleReducer(void 0, peopleActions.setFetchingError())).toMatchSnapshot();
  });

  it('should handle fetch async action', () => {
    expect(peopleReducer(void 0, peopleActions.fetchAsync())).toMatchSnapshot();
  });

  it('should handle fetch async person action', () => {
    expect(peopleReducer(void 0, peopleActions.fetchAsyncPerson())).toMatchSnapshot();
  });
});