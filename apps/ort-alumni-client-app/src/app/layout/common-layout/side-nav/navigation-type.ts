import { Link } from "../nav-bar/link.interface";

export interface NavigationType {
  routesData:Link [];
  title?:string;
  alignment: 'vertical' | 'horizontal';
  routingMethod: 'routing' | 'output';
}