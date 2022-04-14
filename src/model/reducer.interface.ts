import { Action } from "../const/const";

export interface ActionReducer {
  type: Action;
  payload?: {
    digit: string,
    operation: string
  };
}