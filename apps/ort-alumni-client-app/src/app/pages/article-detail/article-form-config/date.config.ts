export const DateConfig  = {
  name: 'date',
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