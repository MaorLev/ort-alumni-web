import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';

@Injectable({ providedIn: 'root' })
export class FormBuilderService {
  constructor(private _formBuilder: FormBuilder) {}

  buildStepperGroup(controls: Record<string, VaInputInterface>):FormGroup {
    const group: FormGroup = this._formBuilder.group({});
    for (const prop in controls) {
      const _control = this._formBuilder.control(
        controls[prop].data?.property || null,
        controls[prop]?.validators,
        controls[prop]?.asyncValidators || null
      );
      group.addControl(controls[prop].name, _control);
    }

    return group;
  }
}
