import { IDispatch } from "./dispatch.interface";

export interface ComponentProps {
  dispatch: IDispatch, 
  operation?: string,
  digit?: string
}