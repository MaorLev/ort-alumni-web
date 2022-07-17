import { ortInput } from "@features/feature-va-input";

export const DetailConfig : ortInput = {
  name: 'detail',
  label: 'תוכן',
  type: 'text',
  placeholder: 'מלא פרטים',
  validators: {
    isRequired: true
  },
  errors: [
    {
      name: 'required',
      message: 'שדה חובה',
    }
  ],
}