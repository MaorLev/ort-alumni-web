import { Action } from "@utils/util-tools";


export class panelAction implements Action {
  type: string;
  data: PanelActionTypes;
}
export interface PanelActionTypes {
  index: number;
  length: number;
}
