import { FilesNodeInterface } from "@features/feature-expansion-panel-node";

export interface MenuQuickLink {
  label:string;
  routeTo:string;
}
export interface MenuDataModal {
  quickLinks:MenuQuickLink[];
  dataSource:FilesNodeInterface[];
}