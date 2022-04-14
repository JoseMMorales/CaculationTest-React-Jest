import { Action } from "../const/const";

export interface IState {
  type?: Action;
  overwrite?: boolean; 
  currentOperand: string; 
  previousOperand: string; 
  operation: string; 
}