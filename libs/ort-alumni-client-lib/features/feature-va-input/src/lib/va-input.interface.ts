import { AsyncValidatorFn } from "@angular/forms";
import { formValidators } from "./form-validators.interface";

export interface ortInput {
  name: string;
  label: string;
  placeholder?: string;
  styleClass?: string;
  type?:string;
  data:any;
  validators?: any;
  asyncValidators?: AsyncValidatorFn[];
  errors?: { name: string; message: string }[];
}
