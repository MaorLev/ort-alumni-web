import { Validators } from '@angular/forms';
import { FormInterface } from '@features/feature-form';
import { AbstractInputComponent } from '@features/feature-va-input';


export const LoginFormConfig: FormInterface = {
  groupName: 'loginForm',
  buttons: [{ label: 'התחבר', type: 'submit', className: 'btn' }],
  controls: {
    // phone: {
    //   component: AbstractPhoneComponent,
    //   name: 'phone',
    //   label: 'טלפון',
    //   type: 'text',
    //   placeholder: 'טלפון',
    //   validators: [
    //     Validators.required,
    //     Validators.pattern('^0\\d([\\d]{0,1})([-]{0,1})\\d{7}$'),
    //   ],
    //   data: {},
    //   errors: [
    //     {
    //       name: 'required',
    //       message: 'שדה חובה',
    //     },
    //     {
    //       name: 'pattern',
    //       message: 'נדרש מספר תקין',
    //     },
    //   ],
    // },
    // date: {
    //   component: AbstractDatePickerComponent,
    //   name: 'date',
    //   label: 'תאריך לידה',
    //   validators: [],
    //   data: {},
    //   errors: [],
    // },
    email: {
      component: AbstractInputComponent,
      name: 'email',
      label: 'אימייל',
      type: 'text',
      placeholder: 'insert text',
      validators: [
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      data: {},
      errors: [
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
};
