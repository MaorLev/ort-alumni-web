import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  AbstractFileUploadComponent,
  requiredFileType,
} from '@features/feature-file-upload';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent, ortInput } from '@features/feature-va-input';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';

@Injectable()
export class ArticleFormConfigService {
  controls(
    isUpdate: boolean,
    imageNameBefore?: string
  ): Record<string, ortInput> {
    return {
      heading: {
        component: AbstractInputComponent,
        name: 'heading',
        label: 'כותרת',
        type: 'text',
        validators: [Validators.required, Validators.minLength(3)],
        data: {},
        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
        ],
      },
      subheading: {
        component: AbstractInputComponent,
        name: 'subheading',
        label: 'תת כותרת',
        type: 'text',
        validators: [],
        data: {},
        errors: [],
      },
      category: {
        component: AbstractSelectComponent,
        name: 'category',
        label: 'קטגוריה',
        type: '',
        placeholder: 'בחר קטגוריה',
        validators: [Validators.required],
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
        component: AbstractTextareaComponent,
        name: 'detail',
        label: 'תוכן המאמר',
        validators: [Validators.maxLength(2000)],
        data: {},
        errors: [
          {
            name: 'maxlength',
            message: 'maxLength error',
          },
        ],
      },
      image: {
        component: AbstractFileUploadComponent,
        name: 'image',
        label: '',
        type: '',
        validators: [requiredFileType(['png', 'jpg', 'jpeg'])],
        // validators: [isUpdate ? null : Validators.required,requiredFileType(['png', 'jpg', 'jpeg'])],
        data: {
          isDisabled: isUpdate ? true : false,
          nameBefore: imageNameBefore ? imageNameBefore : null,
        },
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
    };
  }
}
