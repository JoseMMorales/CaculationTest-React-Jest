import { ReactElement } from "react";
import { Action } from "../../const/const";
import { ComponentProps } from "../../model/component.interface";

const DigitButton = ({ dispatch, digit }): ReactElement<ComponentProps> => {
  return (
    <button
      onClick={() => dispatch({ type: Action.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
