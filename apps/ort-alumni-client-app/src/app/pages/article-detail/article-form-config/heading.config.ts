import { ortInput } from "@features/feature-va-input";

export const HeadingConfig : ortInput = {
  name: 'heading',
  label: 'כותרת',
  type: 'text',
  placeholder: 'הכנס כותרת',
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