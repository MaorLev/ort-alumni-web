export interface FilesTreeNodeInterface {
  name: string;
  level: number;
  children: FilesTreeNodeInterface[];
  description?: string;
  route?: string;
  nodeId?: number;
}
