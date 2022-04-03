import { render } from "@testing-library/react";
import OperationButton from "./OperationButton";
import { Action } from "../../const/const";
import { IDispatch } from "../../model/dispatch.interface";

test("render OperationButton content", () => {
  const operation: string = "+";
  const dispatch: IDispatch = {
    type: Action.CHOOSE_OPERATION,
    payload: "0",
  };

  const component = render(
    <OperationButton dispatch={dispatch} operation={operation} />
  );
  expect(component.container).toContainHTML;
});
