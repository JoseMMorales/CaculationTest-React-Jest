import { ReactElement } from "react";
import { Action } from "../../const/const";
import { ComponentProps } from "../../model/component.interface";

const OperationButton  = ({ dispatch, operation }): ReactElement<ComponentProps> => {
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
