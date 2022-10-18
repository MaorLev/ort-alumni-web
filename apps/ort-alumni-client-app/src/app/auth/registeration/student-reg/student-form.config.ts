/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractDatePickerComponent } from '@features/feature-va-date-picker';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractPhoneComponent } from '@features/feature-va-phone';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { StepsForm } from '@features/feature-expansion-panel';
import { ButtonAction } from '@ui-components/ui-button'
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentFormConfig {
  constructor() {}

  readonly studentForm: StepsForm = {
    groupStepsName: 'studentForm',
    groupId: 1,
    content: { header: 'רישום סטודנט' },
    steps: [
      {
        stepName: '',
        order: 1,
        stepHeader: { title: 'פרטי כניסה', description: '', icon: '' },
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure:'style-grid',
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
                  message: 'שדה חובה',
                },
                {
                  name: 'minlength',
                  message: 'נדרש לפחות 6 תווים',
                },
              ],
            },
          },
        },
        stepButtons: [
          {
            name: 'AgreeAndContinue',
            label: 'אשר והמשך',
            role: ButtonAction.StepSubmited,
            color: 'accent',
            className: 'mat-raised-button'
          },
        ],
      },

      {
        stepName: '',
        stepHeader: { title: 'פרטיים אישיים', description: '', icon: '' },
        order: 2,
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure:'style-grid',
          controls: {
            phone: {
              component: AbstractPhoneComponent,
              name: 'phone',
              label: 'טלפון',
              type: 'text',
              placeholder: '050-555-1234',
              validators: [
                Validators.nullValidator,
                Validators.pattern('^0\\d([\\d]{0,1})([-]{0,1})\\d{7}$'),
              ],
              data: {},
              errors: [
                {
                  name: 'pattern',
                  message: 'נדרש מספר תקין',
                },
              ],
            },
            dateofbirth: {
              component: AbstractDatePickerComponent,
              name: 'dateofbirth',
              label: 'תאריך לידה',
              validators: [],
              data: {},
              // data: {property: { value: undefined, disabled: true },},
              errors: [],
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
                  message: 'מקסימום 12 מספרים',
                },
              ],
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
                  { name: 'tel_aviv', hebName: 'תל אביב', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'invalidAutocompleteString',
                  message: 'בחר עיר מתוך הרשימה, חפש עם השלמה אוטומטית.',
                },
              ],
            },
          },
        },
        stepButtons: [
          {
            name: 'Preview',
            label: 'הקודם',
            role: ButtonAction.Prev,
            color: 'accent',
            className: 'mat-raised-button'
          },
          {
            name: 'AgreeAndContinue',
            label: 'אשר והמשך',
            role: ButtonAction.StepSubmited,
            color: 'accent',
            className: 'mat-raised-button'
          },
        ],
      },
      {
        stepName: '',
        order: 2,
        stepHeader: { title: 'פרטי מכללה', description: '', icon: '' },
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure:'style-grid',
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
                  { name: 'ort_br', hebName: 'אורט בראודה', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
              ],
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
                  { name: 'constructor', hebName: 'בניין', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
              ],
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
                  message: 'שדה חובה',
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 4 מספרים',
                },
              ],
            },
          },
        },
        stepButtons: [
          {
            name: 'Preview',
            label: 'הקודם',
            role: ButtonAction.Prev,
            color: 'accent',
            className: 'mat-raised-button'
          },
          {
            name: 'Submit',
            label: 'סיימתי',
            role: ButtonAction.StepsSubmited,
            color: 'accent',
            className: 'mat-raised-button'
          },
        ],
      },
      {
        stepName: '',
        stepHeader: { title: 'סיום', description: '', icon: '' },
        order: 3,
        stepContent: {
          header: 'נרשמת בהצלחה',
          subheader: 'כעת ניתן לבצע התחברות',
          content: '',
        },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          controls: {},
        },
        stepButtons: [
          {
            name: 'RouteTo',
            label: 'התחבר למערכת',
            route: '/auth/login',
            role: ButtonAction.RouteTo,
            color: 'accent',
            className: 'mat-raised-button'
          },
        ],
      },
    ],
  };
}
