import { FilesTreeNodeInterface } from '@features/feature-expansion-tree';

export interface ModalBottomLinks {
  label: string;
  routeTo: string;
}
export interface MenuDataModal {
  quickLinks: ModalBottomLinks[];
  dataSource: FilesTreeNodeInterface[];
}
