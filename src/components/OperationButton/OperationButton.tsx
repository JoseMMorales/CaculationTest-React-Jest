import { ReactElement } from "react";
import { Action } from "../../const/const";
import { ComponentProps } from "../../model/component.interface";
import { IDispatch } from "../../model/dispatch.interface";

const OperationButton  = ({ dispatch, operation }: IDispatch): ReactElement<ComponentProps> => {
  return (
    <button
      onClick={() =>
        dispatch({ type: Action.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
