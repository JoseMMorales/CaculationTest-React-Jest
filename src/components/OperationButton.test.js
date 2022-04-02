import React from "react";
import { render } from "@testing-library/react";
import OperationButton from "./OperationButton";
import { ACTIONS } from "../App";

test("render OperationButton content", () => {
  const digit = "0";
  const dispatch = {
    type: ACTIONS.CHOOSE_OPERATION,
    payload: "0",
  };

  const component = render(
    <OperationButton dispatch={dispatch} digit={digit} />
  );
  expect(component.container).toContainHTML;
});
