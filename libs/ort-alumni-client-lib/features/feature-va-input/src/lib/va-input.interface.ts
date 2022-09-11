import {
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';

export interface VaErrorsInterface {
  name: string;
  message: string;
}
export interface VaDataInterface {
  nameBefore?:string | null;
  property?:{value:any, disabled:boolean}
  maxLengthValue?:number;
  isMultiple?:boolean;
  options$?:any;
  options?:any;
  validate?:any;
}
export interface VaInputInterface {
  component: ComponentType<unknown>;
  name: string;
  label: string;
  placeholder?: string;
  styleClass?: string;
  type?: string;
  subtype?: string;
  data: VaDataInterface;
  validators: ValidatorFn[] | ValidationErrors;
  asyncValidators?: AsyncValidatorFn[];
  errors?: VaErrorsInterface [];
}
