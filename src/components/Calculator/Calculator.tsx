import { useReducer } from "react";
import "./Calculator.css";

import DigitButton from "../DigitButton/DigitButton";
import OperationButton from "../OperationButton/OperationButton";
import { Action } from "../../const/const";
import { IState } from "../../model/state.interface";
import { ActionReducer } from "../../model/reducer.interface";

const reducer = (state: any, action: ActionReducer) => {
  switch (action.type) {
    case Action.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload && action.payload.digit,
          overwrite: false,
        };
      }
      if ((((action.payload && action.payload.digit) === "0") && state.currentOperand) === "0") {
        return state;
      }
      if (
        ((action.payload && action.payload.digit) === ".") &&
        (!state.currentOperand || state.currentOperand.includes("."))
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload && action.payload.digit}`,
      };
    case Action.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: action.payload && action.payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: action.payload && action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload && action.payload.operation,
        currentOperand: null,
      };
    case Action.CLEAR:
      return {};
    case Action.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length == 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case Action.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

const evaluate = (state: IState): string => {
  const prev: number = parseFloat(state.previousOperand);
  const current: number = parseFloat(state.currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";
  let computation: number = 0;

  switch (state.operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "*":
      computation = prev * current;
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
const formatOperand = (operand: { split: (arg0: string) => [any, any]; }) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

const initialState: IState = {
  currentOperand: "", 
  previousOperand: "", 
  operation: "",
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(state.previousOperand)} {state.operation}
        </div>
        <div className="current-operand">{formatOperand(state.currentOperand)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: Action.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: Action.DELETE_DIGIT })}>
        DEL
      </button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: Action.EVALUATE })}
      >
        =
      </button>
    </div>
  );
}

export default Calculator;