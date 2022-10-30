export interface Link {
  label: string;
  name: string;
  route: string;
  order?: number;
  showIfLogin?: boolean;
  onClick?:() => void;
}
