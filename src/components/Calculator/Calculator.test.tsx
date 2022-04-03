import Calculator from "./Calculator";

describe("Calculator", () => {
  let component: JSX.Element;

  beforeEach(() => {
    component = <Calculator />;
  });

  test("render Calculator component", () => {
    expect(component).toContainHTML;
  });
});