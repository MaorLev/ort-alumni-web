import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { StepsForm } from '@features/feature-expansion-panel';
import { AbstractInputComponent } from '@features/feature-va-input';
import { ButtonAction } from '@ui-components/ui-button'
@Injectable({
  providedIn: 'root'
})
export class AdminFormConfig {

  constructor() { }
  readonly adminForm: StepsForm = {
    groupStepsName: 'AdminForm',
    groupId: 1,
    content: { header: 'רישום מנהל מערכת' },
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
            name: 'prev',
            label: 'הקודם',
            role: ButtonAction.Prev,
            color: 'accent',
            className: 'mat-raised-button'
          },
          {
            name: 'submit',
            label: 'סיימתי',
            role: ButtonAction.Submmited,
            color: 'accent',
            className: 'mat-raised-button'
          },
        ],
      },
      {
        stepName: '',
        stepHeader: { title: 'סיום', description: '', icon: '' },
        order: 2,
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
          // {
          //   name: 'routeTo',
          //   label: 'התחבר למערכת',
          //   routeTo: '/auth/login',
          //   role: ButtonAction.RouteTo,
          //   color: 'accent',
          //   className: 'mat-raised-button'
          // },
        ],
      },
    ],
  };
}
