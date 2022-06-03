import { ComponentType } from "@angular/cdk/portal";

export interface ModalType {
  component:ComponentType<unknown>,
  direction: 'rtl' | 'ltr',
  width: string,

}