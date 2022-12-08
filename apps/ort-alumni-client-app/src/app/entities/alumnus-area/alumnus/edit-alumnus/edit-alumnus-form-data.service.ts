import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { AbstractCheckListComponent } from '@features/feature-check-list';
import {
  AbstractFileUploadComponent,
  requiredFileType
} from '@features/feature-file-upload';

import { AbstractDatePickerComponent } from '@features/feature-va-date-picker';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractPhoneComponent } from '@features/feature-va-phone';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { ProfileAreaConfigType } from '../../../../layout/profile-layout/profile-area.type';

import { of } from 'rxjs';
import { AlumnusDataService } from '../state-alumnus/alumnus.data.service';



@Injectable()
export class EditAlumnusFormData {
  constructor(private alumnusDataService: AlumnusDataService) {}

  alumnusControls(): ProfileAreaConfigType {
    return {
      profileName: 'Alumnus',
      NavigationData: {
        routesData: [
          { label: 'פרטי כניסה', name: 'enterance', route: 'enterance' },
          { label: 'פרטיים אישיים', name: 'personal', route: 'personal' },
          { label: 'פרטי מכללה', name: 'collage', route: 'collage' },
          { label: 'פרטי תעסוקה', name: 'occupation', route: 'occupation' }
        ],
        alignment: 'horizontal',
        routingMethod: 'output'
      },
      groups: [
        {
          groupName: 'enterance',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
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
                  message: 'שדה חובה'
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 10 אותיות'
                }
              ]
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
                  message: 'שדה חובה'
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 10 אותיות'
                }
              ]
            },
            email: {
              component: AbstractInputComponent,
              name: 'email',
              label: 'אימייל',
              type: 'text',
              placeholder: 'pat@example.com',
              validators: [
                Validators.required
                // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
              ],
              data: {},
              errors: [
                {
                  name: '',
                  message: 'אימייל קיים במערכת'
                },
                {
                  name: 'required',
                  message: 'שדה חובה'
                },
                {
                  name: 'pattern',
                  message: 'הזן אימייל תקין'
                }
              ]
            },
            password: {
              component: AbstractInputComponent,
              name: 'password',
              label: 'סיסמא',
              type: 'password',
              placeholder: 'סיסמא',
              validators: [Validators.required, Validators.minLength(6)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                },
                {
                  name: 'minlength',
                  message: 'נדרש לפחות 6 תווים'
                }
              ]
            }
          }
        },
        {
          groupName: 'personal',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            phone: {
              component: AbstractPhoneComponent,
              name: 'phone',
              label: 'טלפון',
              type: 'text',
              placeholder: '050-555-1234',
              validators: [
                Validators.nullValidator,
                Validators.pattern('^0\\d([\\d]{0,1})([-]{0,1})\\d{7}$')
              ],
              data: {},
              errors: [
                {
                  name: 'pattern',
                  message: 'נדרש מספר תקין'
                }
              ]
            },
            dateofbirth: {
              component: AbstractDatePickerComponent,
              name: 'dateofbirth',
              label: 'תאריך לידה',
              validators: [],
              data: {},
              // data: {property: { value: undefined, disabled: true },},
              errors: []
            },
            cardid: {
              component: AbstractInputComponent,
              name: 'cardid',
              label: 'תעודת זהות',
              type: 'text',
              validators: [Validators.maxLength(12)],
              data: {},
              errors: [
                {
                  name: 'maxLength',
                  message: 'מקסימום 12 מספרים'
                }
              ]
            },
            city: {
              component: AbstractSelectAutoCompleteComponent,
              name: 'city',
              label: 'עיר',
              type: 'text',
              validators: [
                // AutocompleteStringValidator.autocompleteStringValidator(
                //   this.getOptionsMockDropSelect()
                // ),
              ],
              data: {
                options$: of([
                  { name: 'jerusalem', hebName: 'ירושלים', id: 1 },
                  { name: 'tel_aviv', hebName: 'תל אביב', id: 2 }
                ])
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                },
                {
                  name: 'invalidAutocompleteString',
                  message: 'בחר עיר מתוך הרשימה, חפש עם השלמה אוטומטית.'
                }
              ]
            }
          }
        },
        {
          groupName: 'collage',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            college: {
              component: AbstractSelectComponent,
              name: 'college',
              label: 'מכללה',
              type: '',
              placeholder: 'בחר מכללה בה למדת',
              validators: [Validators.required],
              data: {
                isMultiple: false,
                options$: of([
                  { name: 'ort_jr', hebName: 'אורט ירושלים', id: 1 },
                  { name: 'ort_br', hebName: 'אורט בראודה', id: 2 }
                ])
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                }
              ]
            },
            studyprogram: {
              component: AbstractSelectComponent,
              name: 'studyprogram',
              label: 'מגמה',
              type: '',
              placeholder: 'בחר מגמה',
              validators: [Validators.required],
              data: {
                isMultiple: false,
                options$: of([
                  { name: 'software', hebName: 'תוכנה', id: 1 },
                  { name: 'constructor', hebName: 'בניין', id: 2 }
                ])
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                }
              ]
            },
            studystartyear: {
              component: AbstractInputComponent,
              name: 'studystartyear',
              label: 'שנת תחילת לימודים',
              type: 'text',
              validators: [Validators.maxLength(4)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 4 מספרים'
                }
              ]
            },
            studyfinishyear: {
              component: AbstractInputComponent,
              name: 'studyfinishyear',
              label: 'שנת תחילת לימודים',
              type: 'text',
              validators: [Validators.maxLength(4)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה'
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 4 מספרים'
                }
              ]
            }
          }
        },
        {
          groupName: 'occupation',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            workplace: {
              component: AbstractTextareaComponent,
              name: 'workplace',
              label: 'מקום עבודה נוכחי',
              type: '',
              placeholder: '',
              validators: [Validators.maxLength(7000)],
              data: { maxLengthValue: 7000 },
              errors: [
                {
                  name: 'maxlength',
                  message: 'maxLength error'
                }
              ]
            },
            linkedin: {
              component: AbstractInputComponent,
              name: 'linkedin',
              label: 'לינקדין',
              type: '',
              placeholder: 'הלינקדין שלך :)',
              validators: [Validators.maxLength(20)],
              data: {},
              errors: [
                {
                  name: 'maxlength',
                  message: ''
                }
              ]
            }
          }
        }
      ]
    };
  }
}
