import { Dispatch } from "react";

export interface DispatchProps { 
  dispatch : Dispatch<{}>,
  digit?: string,
  operation?: string
}