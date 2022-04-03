import { ReactElement } from "react";
import { Action } from "../../const/const";
import { ComponentProps } from "../../model/component.interface";
import { DispatchProps } from "../../model/dispatchProps.interface";

const DigitButton = ({ dispatch, digit }: DispatchProps): ReactElement<ComponentProps> => {
  return (
    <button
      onClick={() => dispatch({ type: Action.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
