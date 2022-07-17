import { ortInput } from "@features/feature-va-input";

export const SubheadingConfig : ortInput = {
  name: 'subheading',
  label: 'תת כותרת',
  type: 'text',
  placeholder: 'הכנס תת כותרת',
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