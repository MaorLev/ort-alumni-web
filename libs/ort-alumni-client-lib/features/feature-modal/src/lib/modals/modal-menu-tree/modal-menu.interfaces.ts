import { FilesTreeNodeInterface } from '@features/feature-expansion-tree';

export interface MenuQuickLink {
  label: string;
  routeTo: string;
}
export interface MenuDataModal {
  quickLinks: MenuQuickLink[];
  dataSource: FilesTreeNodeInterface[];
}
