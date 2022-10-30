import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AbstractCheckListComponent } from '@features/feature-check-list';
import {
  AbstractFileUploadComponent,
  requiredFileType,
} from '@features/feature-file-upload';
import { FormInterface } from '@features/feature-form';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { AbstractChipsSelectComponent } from '@features/va-chips-select';
import { AbstractCurrencyInputComponent } from '@ort-alumni-web/ort-alumni-client-lib-features-feature-va-currency-input';
import { of } from 'rxjs';
import { AlumnusDataService } from '../../auth/registeration/alumnus-reg/state/alumnus.data.service';


@Injectable()
export class PAlumnusFormData {

  constructor(private alumnusDataService: AlumnusDataService) {}

  controls(): FormInterface {

    return {
      groupName: 'alumnus',
      buttons: [
        { label: 'עדכן', type: 'submit', className: 'btn' },
      ],
      controls: {
        firstname: {
          component: AbstractInputComponent,
          name: 'firstname',
          label: 'שם פרטי',
          type: 'text',
          validators: [Validators.maxLength(10)],
          data: {},
          errors: [
            {
              name: 'required',
              message: 'שדה חובה',
            },
            {
              name: 'maxLength',
              message: 'מקסימום 10 אותיות',
            },
          ],
        },
        lastname: {
          component: AbstractInputComponent,
          name: 'lastname',
          label: 'שם משפחה',
          type: 'text',
          validators: [Validators.maxLength(10)],
          data: {},
          errors: [
            {
              name: 'required',
              message: 'שדה חובה',
            },
            {
              name: 'maxLength',
              message: 'מקסימום 10 אותיות',
            },
          ],
        },
        email: {
          component: AbstractInputComponent,
          name: 'email',
          label: 'אימייל',
          type: 'text',
          placeholder: 'pat@example.com',
          validators: [
            Validators.required,
            // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
          data: {},
          errors: [
            {
              name: '',
              message: 'אימייל קיים במערכת',
            },
            {
              name: 'required',
              message: 'שדה חובה',
            },
            {
              name: 'pattern',
              message: 'הזן אימייל תקין',
            },
          ],
        },
      },
      controlsWidthClass: 'fullWidth',
    };
  }
}

