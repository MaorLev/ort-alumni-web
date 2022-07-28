import { Injectable } from '@angular/core';
import { ortInput } from '@features/feature-va-input';

@Injectable()
export class ArticleFormConfigService {
  constructor() {}

  controls(isUpdate: boolean): Record<string, ortInput> {
    return {
      category: {
        name: 'category',
        label: 'קטגוריה',
        type: '',
        placeholder: 'בחר קטגוריה',
        data: {
          isMultiple: false,
          options: [
            { name: 'Events', id: 1 },
            { name: 'General', id: 2 },
          ],
        },

        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
        ],
      },
      detail: {
        name: 'detail',
        label: 'תוכן המאמר',
        data: {},
        errors: [
          {
            name: 'maxlength',
            message: 'maxLength error',
          },
        ],
      },
      heading: {
        name: 'heading',
        label: 'כותרת',
        type: 'text',
        data: {},
        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
        ],
      },
      image: {
        name: 'image',
        label: '',
        type: '',
        data: { isDisabled: isUpdate ? true : false },
        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
          {
            name: 'requiredFileType',
            message: 'נדרשת תמונת בעלת אחת הסיומות: .png, .jpg, .jpeg',
          },
        ],
      },
      subheading: {
        name: 'subheading',
        label: 'תת כותרת',
        type: 'text',
        data: {},
        errors: [],
      },
    };
  }
}
