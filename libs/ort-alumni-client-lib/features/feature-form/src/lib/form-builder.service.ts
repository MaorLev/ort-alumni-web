import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VaFormInputInterface, VaFormInputInterfaceWithValidationErrors, VaFormInputInterfaceWithValidatorFns } from '@utils/core/global-interfaces';
import { ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class FormBuilderService {
  constructor(private _formBuilder: FormBuilder) {}

  buildStepperGroup(controls: Record<string, VaFormInputInterface>): FormGroup {
    const group: FormGroup = this._formBuilder.group({});
    for (const prop in controls) {
      let _control: FormControl;

      if ('validators' in controls[prop] && typeof controls[prop].validators === 'object' && !Array.isArray(controls[prop].validators)) {
        // Handle ValidationErrors
        const controlOptions: AbstractControlOptions = {
          updateOn: controls[prop]?.updateOn || undefined,
          asyncValidators: controls[prop]?.asyncValidators || null,
        };
        _control = this._formBuilder.control(controls[prop].data?.property || null, controlOptions);
        _control.setErrors(controls[prop].validators as VaFormInputInterfaceWithValidationErrors);
      } else {
        // Handle ValidatorFn[]
        const controlOptions: AbstractControlOptions = {
          validators: (controls[prop] as VaFormInputInterfaceWithValidatorFns).validators || null,
          updateOn: controls[prop]?.updateOn || undefined,
          asyncValidators: controls[prop]?.asyncValidators || null,
        };
        _control = this._formBuilder.control(controls[prop].data?.property || null, controlOptions);
      }

      group.addControl(controls[prop].name, _control);
    }

    return group;
  }

}



// interface BaseVaFormInputInterface {
//   name: string;
//   data?: {
//     property?: any;
//   };
//   updateOn?: 'change' | 'blur' | 'submit' | null;
//   asyncValidators?: AsyncValidatorFn[] | null;
// }



  // buildStepperGroup(controls: Record<string, VaFormInputInterface>):FormGroup {
  //   const group: FormGroup = this._formBuilder.group({});
  //   for (const prop in controls) {
  //     const _control = this._formBuilder.control(
  //       controls[prop].data?.property || null,
  //       controls[prop]?.validators,
  //       controls[prop]?.asyncValidators || null
  //     );
  //     group.addControl(controls[prop].name, _control);
  //   }

  //   return group;
  // }
