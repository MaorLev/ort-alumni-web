import {
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';
interface BaseVaFormInputInterface {
  component?: ComponentType<unknown>;
  name: string;
  label: string;
  placeholder?: string;
  styleClass?: string;
  type?: string;
  styles?:StylesControl;
  subtype?: string;
  data: VaDataInterface;
  asyncValidators?: AsyncValidatorFn[];
  updateOn?:'change' | 'blur' | 'submit';
  errors?: VaErrorsInterface [];
}

export interface VaErrorsInterface {
  name: string;
  message: string;
}
export interface VaDataInterface {
  nameBefore?:string | null;
  property?:{value:any, disabled?:boolean}
  maxLengthValue?:number;
  isMultiple?:boolean;
  limitation?:number;
  options$?:any;
  options?:any;
  validate?:any;
  style?:string
}
export interface StylesControl {
  width:string;
  display:string;
}
export interface VaFormInputInterfaceWithValidatorFns extends BaseVaFormInputInterface {
  validators?: ValidatorFn[] | null;
}

export interface VaFormInputInterfaceWithValidationErrors extends BaseVaFormInputInterface {
  validators?: ValidationErrors;
}

export type VaFormInputInterface = VaFormInputInterfaceWithValidatorFns | VaFormInputInterfaceWithValidationErrors;