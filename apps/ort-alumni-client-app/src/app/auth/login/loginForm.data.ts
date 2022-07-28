import { ortInput } from '@features/feature-va-input';

export const loginForm: ortInput[] = [
  {
    name: 'email',
    label: 'אימייל',
    type: 'text',
    placeholder: 'insert text',
    data:{},
    validators: {
      isRequired: true,
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
    },
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
  {
    name: 'password',
    label: 'סיסמא',
    type: 'text',
    placeholder: 'סיסמא',
    validators:{
      isRequired: true,
      minLength: 6,
    },
    data: { hide: true },
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
];
