import React from "react";
import { render } from "@testing-library/react";
import Calculator from "./Calculator";

test("render Calculator content", () => {
  const component = render(<Calculator />);

  expect(component.container).toContainHTML;
});
