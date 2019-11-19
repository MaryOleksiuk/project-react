import { peopleActions } from "../actions";

describe("People actions:", () => {
  it("Start fetching", () => {
    expect(peopleActions.startFetching()).toMatchSnapshot();
  });

  it("Stop fetching", () => {
    expect(peopleActions.stopFetching()).toMatchSnapshot();
  });

  it("Fill", () => {
    expect(peopleActions.fill()).toMatchSnapshot();
  });

  it("Fill Film", () => {
    expect(peopleActions.fillPerson()).toMatchSnapshot();
  });

  it("Set fething error", () => {
    expect(peopleActions.setFetchingError()).toMatchSnapshot();
  });

  it("Fetch async", () => {
    expect(peopleActions.fetchAsync()).toMatchSnapshot();
  });

  it("Fetch async film", () => {
    expect(peopleActions.fetchAsyncPerson()).toMatchSnapshot();
  });
});