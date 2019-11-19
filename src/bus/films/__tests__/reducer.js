import { filmsReducer } from "../reducer";
import { filmsActions } from "../actions";

describe('Films reducer', () => {
  it('should return initial state by default', () => {
    expect(filmsReducer(void 0, {})).toMatchSnapshot();
  });

  it('should handle start fetching action', () => {
    expect(filmsReducer(void 0, filmsActions.startFetching())).toMatchSnapshot();
  });

  it('should handle stop fetching action', () => {
    expect(filmsReducer(void 0, filmsActions.stopFetching())).toMatchSnapshot();
  });

  it('should handle fill action', () => {
    expect(filmsReducer(void 0, filmsActions.fill())).toMatchSnapshot();
  });

  it('should handle fill film action', () => {
    expect(filmsReducer(void 0, filmsActions.fillFilm())).toMatchSnapshot();
  });

  it('should handle set fetching error', () => {
    expect(filmsReducer(void 0, filmsActions.setFetchingError())).toMatchSnapshot();
  });

  it('should handle fetch async action', () => {
    expect(filmsReducer(void 0, filmsActions.fetchAsync())).toMatchSnapshot();
  });

  it('should handle fetch async action', () => {
    expect(filmsReducer(void 0, filmsActions.fetchAsync())).toMatchSnapshot();
  });

  it('should handle fetch async films action', () => {
    expect(filmsReducer(void 0, filmsActions.fetchAsyncFilm())).toMatchSnapshot();
  });
});