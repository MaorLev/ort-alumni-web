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
      author: {
        component: AbstractInputComponent,
        name: 'author',
        label: 'מחבר',
        type: 'text',
        validators: [Validators.required, Validators.maxLength(25)],
        data: {},
        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
          {
            name: 'maxLength',
            message: 'מקסימום 25 אותיות',
          },
        ],
      },
      heading: {
        component: AbstractInputComponent,
        name: 'heading',
        label: 'כותרת',
        type: 'text',
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(80)],
        data: {},
        errors: [
          {
            name: 'required',
            message: 'שדה חובה',
          },
          {
            name: 'minLength',
            message: 'מינימום 3 אותיות',
          },
          {
            name: 'maxLength',
            message: 'מקסימום 80 אותיות',
          },
        ],
      },
      subheading: {
        component: AbstractInputComponent,
        name: 'subheading',
        label: 'תת כותרת',
        type: 'text',
        validators: [Validators.maxLength(1000)],
        data: {},
        errors: [{
          name: 'maxLength',
          message: 'מקסימום 150 אותיות',
        },],
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
            { name: 'Events',hebName: 'אירועים', id: 1 },
            { name: 'General',hebName: 'כללי', id: 2 },
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
        validators: [Validators.maxLength(7000)],
        data: {maxLengthValue: 7000},
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
