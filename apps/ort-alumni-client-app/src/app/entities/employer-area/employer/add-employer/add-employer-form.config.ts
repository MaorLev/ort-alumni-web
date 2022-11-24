import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { StepsForm } from '@features/feature-expansion-panel';
import { AbstractInputComponent } from '@features/feature-va-input';
import { ButtonAction } from '@ui-components/ui-button'
@Injectable({
  providedIn: 'root'
})
export class AddEmployerFormConfig {

  constructor() { }

  readonly employerForm: StepsForm = {
    groupStepsName: 'EmployerForm',
    groupId: 1,
    content: { header: 'רישום מעסיק' },
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
        stepHeader: { title: 'פרטי מעסיק', description: '', icon: '' },
        order: 2,
        stepContent: { header: '', subheader: '', content: '' },
        stepGroupForm: {
          groupName: '',
          buttons: [],
          styleStructure:'style-grid',
          controls: {
            contactRole: {
              component: AbstractInputComponent,
              name: 'contactRole',
              label: 'תפקיד איש הקשר',
              type: 'text',
              validators: [Validators.maxLength(25)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 25 אותיות',
                },
              ],
            },
            companyName: {
              component: AbstractInputComponent,
              name: 'companyName',
              label: 'שם החברה',
              type: 'text',
              validators: [Validators.maxLength(25)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 25 אותיות',
                },
              ],
            },
            typeOfBusiness: {
              component: AbstractInputComponent,
              name: 'typeOfBusiness',
              label: 'סוג העסק',
              placeholder: 'הייטק חשמל',
              type: 'text',
              validators: [Validators.maxLength(25)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 25 אותיות',
                },
              ],
            },
            companyAddress: {
              component: AbstractInputComponent,
              name: 'companyAddress',
              label: 'כתובת העסק',
              type: 'text',
              validators: [Validators.maxLength(25)],
              data: {},
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'maxLength',
                  message: 'מקסימום 25 אותיות',
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
