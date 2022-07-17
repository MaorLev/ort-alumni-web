import { AsyncValidatorFn } from "@angular/forms";
import { formValidators } from "./form-validators.interface";

export interface ortInput {
  name: string;
  label: string;
  styleClass?: string;
  type?:string;
  data?:any;
  validators?: formValidators;
  asyncValidators?: AsyncValidatorFn[];
  errors?: { name: string; message: string }[];
  placeholder?: string;
}
