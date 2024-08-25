export interface Link {
  label: string;
  name: string;
  route: string;
  order?: number;
  requiredPermission?:boolean;
  showIfLogin?: boolean;
  onClick?:() => void;
}
