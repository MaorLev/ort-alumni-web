import { ComponentType } from "@angular/cdk/portal";

export interface ModalInteface {
  component:ComponentType<unknown>,
  direction: 'rtl' | 'ltr',
  width: string,
  data?:any

}