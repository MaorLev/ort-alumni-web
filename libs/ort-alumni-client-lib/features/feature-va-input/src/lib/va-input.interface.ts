import { AbstractControl, AsyncValidatorFn } from "@angular/forms";

export interface ortInput {
  component?:any;
  name: string;
  label: string;
  placeholder?: string;
  styleClass?: string;
  type?:string;
  subtype?:string;
  data:any;
  validators?: any;
  asyncValidators?: AsyncValidatorFn[];
  errors?: { name: string; message: string }[];
}
