import { ortInput } from "@features/feature-va-input";

  export const CATEGORYSELECTION: ortInput = {
    name: 'category',
    label: 'קטגוריה',
    type: '',
    placeholder: 'בחר קטגוריה',
    data: {
      isMultiple: false,
      options: [{name:'Events', id:1},{name : 'General',id:2}],
    },
    validators: {
      isRequired: true,
    },
    errors: [
      {
        name: 'required',
        message: 'שדה חובה',
      },
    ],
  };
