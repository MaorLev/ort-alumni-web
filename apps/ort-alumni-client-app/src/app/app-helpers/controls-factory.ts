import {
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import {
  AbstractInputComponent,
} from '@features/feature-va-input';
import { AbstractPhoneComponent } from '@features/feature-va-phone';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { AbstractCheckListComponent } from '@features/feature-check-list';
import { AbstractChipsSelectComponent } from '@features/va-chips-select';
import { AbstractCurrencyInputComponent } from '@ort-alumni-web/ort-alumni-client-lib-features-feature-va-currency-input';
import { AbstractFileUploadComponent } from '@features/feature-file-upload';
import { AbstractDatePickerComponent } from '@features/feature-va-date-picker';
import { of } from 'rxjs';


import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { VaFormInputInterface } from '@utils/core/global-interfaces';



export function asyncNullValidator(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  return of(null);
}
export class ControlsFactory {
  static basicInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractInputComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: ctrl_data.type ? ctrl_data.type : 'text',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };

  static phoneInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractPhoneComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: ctrl_data.type ? ctrl_data.type : 'text',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static datePickerInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractDatePickerComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };

  static selectAutoCompleteInput = (
    ctrl_data: VaFormInputInterface
  ): VaFormInputInterface => {
    return {
      component: AbstractSelectAutoCompleteComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: ctrl_data.type ? ctrl_data.type : 'text',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };

  static selectInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractSelectComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: ctrl_data.type ? ctrl_data.type : 'text',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static textAreaInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractTextareaComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: '',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static checkListInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractCheckListComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: '',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static chipsSelectInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractChipsSelectComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: '',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static currencyInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractCurrencyInputComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: '',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
  static imageInput = (ctrl_data: VaFormInputInterface): VaFormInputInterface => {
    return {
      component: AbstractFileUploadComponent,
      name: ctrl_data.name,
      label: ctrl_data.label ? ctrl_data.label : '',
      placeholder: ctrl_data.placeholder ? ctrl_data.placeholder : undefined,
      type: '',
      validators: ctrl_data.validators
        ? ctrl_data.validators
        : [Validators.nullValidator],
      asyncValidators: ctrl_data.asyncValidators
        ? ctrl_data.asyncValidators
        : [asyncNullValidator],
      data: ctrl_data.data ? ctrl_data.data : {},
      errors: ctrl_data.errors ? ctrl_data.errors : [],
    };
  };
}
