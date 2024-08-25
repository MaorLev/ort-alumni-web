export interface RouteNavigationType {
  label: string;
  name: string;
  route?: string;
  children?: RouteNavigationType[];
  skipLC?: boolean;
  order?: number;
  showIfLogin?: boolean;
  onClick?:() => void;
}
