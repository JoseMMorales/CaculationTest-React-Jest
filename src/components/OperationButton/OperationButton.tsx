import { ReactElement } from "react";
import { Action } from "../../const/const";
import { IDispatch } from "../../model/dispatch.interface";

const OperationButton  = ({ dispatch, operation }: IDispatch): ReactElement<IDispatch> => {
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
