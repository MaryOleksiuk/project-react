import { studentActions } from "../actions";

describe("Student actions:", () => {
  it("Set student", () => {
    expect(studentActions.setStudent()).toMatchSnapshot();
  });
});