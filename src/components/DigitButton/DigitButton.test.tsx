import { Dispatch } from "react";
import { render } from "@testing-library/react";
import DigitButton from "./DigitButton";
import { Action } from "../../const/const";
import { IDispatch } from "../../model/dispatch.interface";


test("render DigitButton content", () => {
  const digit: string = "0";
  const dispatch:IDispatch = {
    type: Action.ADD_DIGIT,
    payload: "0",
  };

  const component = render(<DigitButton dispatch={dispatch} digit={digit} />);
  expect(component.container).toContainHTML;
});
