/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AbstractCheckListComponent } from '@features/feature-check-list';
import {
  AbstractFileUploadComponent,
  requiredFileType,
} from '@features/feature-file-upload';
import { FormInterface } from '@features/feature-form';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { AbstractChipsSelectComponent } from '@features/va-chips-select';
import { AbstractCurrencyInputComponent } from '@ort-alumni-web/ort-alumni-client-lib-features-feature-va-currency-input';
import { of } from 'rxjs';
import { ArticleService } from '../state/article.service';

@Injectable()
export class ArticleFormConfigService {
  constructor(private articleService: ArticleService) {}
  controls(isUpdate: boolean, imageNameBefore?: string): FormInterface {
    return {
      groupName: 'articles',
      buttons: [
        { label: isUpdate ? 'עדכן' : 'צור', type: 'submit', className: 'btn' },
      ],
      controls: {
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
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(80),
          ],
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
          errors: [
            {
              name: 'maxLength',
              message: 'מקסימום 150 אותיות',
            },
          ],
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
            options$: this.articleService.selectAllCategories(),
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
          data: { maxLengthValue: 7000 },
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
          validators: [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])],
          // validators: [isUpdate ? null : Validators.required,requiredFileType(['png', 'jpg', 'jpeg'])],
          data: {
            // isDisabled: isUpdate ? true : false,
            property: { value: null, disabled: isUpdate ? true : false },
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
      },
      controlsWidthClass: 'fullWidth',
    };
  }
}