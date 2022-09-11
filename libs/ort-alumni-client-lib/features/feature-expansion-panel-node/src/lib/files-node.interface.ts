export interface FilesNodeInterface {
  name: string;
  level:number;
  children: FilesNodeInterface[];
  description?:string;
  route?:string;
  nodeId?: number;
}