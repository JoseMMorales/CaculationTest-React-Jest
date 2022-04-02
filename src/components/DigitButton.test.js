import React from "react";
import { render } from "@testing-library/react";
import DigitButton from "./DigitButton";
import { ACTIONS } from "../const/const";

test("render DigitButton content", () => {
  const digit = "0";
  const dispatch = {
    type: ACTIONS.ADD_DIGIT,
    payload: "0",
  };

  const component = render(<DigitButton dispatch={dispatch} digit={digit} />);
  expect(component.container).toContainHTML;
});
