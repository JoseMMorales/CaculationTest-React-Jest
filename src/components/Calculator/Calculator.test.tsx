import React from "react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  let component;

  beforeEach(() => {
    component = <Calculator />;
  });

  test("render Calculator component", () => {
    expect(component.container).toContainHTML;
  });
});

