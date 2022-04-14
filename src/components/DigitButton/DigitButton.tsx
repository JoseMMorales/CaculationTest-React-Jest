import { ReactElement } from "react";
import { Action } from "../../const/const";
import { IDispatch } from "../../model/dispatch.interface";

const DigitButton = ({ dispatch, digit }: IDispatch): ReactElement<IDispatch> => {
  return (
    <button
      onClick={() => dispatch({ type: Action.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
