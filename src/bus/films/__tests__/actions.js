import { filmsActions } from "../actions";

describe("Films actions:", () => {
  it("Start fetching", () => {
    expect(filmsActions.startFetching()).toMatchSnapshot();
  });

  it("Stop fetching", () => {
    expect(filmsActions.stopFetching()).toMatchSnapshot();
  });

  it("Fill", () => {
    expect(filmsActions.fill()).toMatchSnapshot();
  });

  it("Fill Film", () => {
    expect(filmsActions.fillFilm()).toMatchSnapshot();
  });

  it("Set fething error", () => {
    expect(filmsActions.setFetchingError()).toMatchSnapshot();
  });

  it("Fetch async", () => {
    expect(filmsActions.fetchAsync()).toMatchSnapshot();
  });

  it("Fetch async film", () => {
    expect(filmsActions.fetchAsyncFilm()).toMatchSnapshot();
  });
});