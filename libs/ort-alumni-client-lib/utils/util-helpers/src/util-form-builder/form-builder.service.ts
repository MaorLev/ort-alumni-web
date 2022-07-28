/* eslint-disable no-unsafe-optional-chaining */
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// export interface ControlValue {
//   controlName:string;
//   value:any
// }
@Injectable()
export class FormBuilderService {

  constructor(private _formBuilder: FormBuilder) { }
  buildStepperGroup(controls: any[]) {


    const group: FormGroup = this._formBuilder.group({});
    for(let i = 0; i < controls.length; i++)
    {

        const _control = this._formBuilder.control(
          null,
          controls[i]?.validators,
          controls[i]?.asyncValidators|| null
        );
        group.addControl(
          controls[i].name,
          _control
        );

    }

    return group;
  }
}
