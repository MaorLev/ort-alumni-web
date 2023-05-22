import { RouteNavigationType } from "./route-navigation.type";


export interface NavigationType {
  routesData:RouteNavigationType [];
  title?:string;
  alignment: 'vertical' | 'horizontal';
  routingMethod: 'routing' | 'output';
}