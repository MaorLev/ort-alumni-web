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
  // CheckBoxValidation(ctrl: AbstractControl): ValidatorFn | null {
  //   const group = ctrl.parent as FormGroup;
  //   const modes = ctrl.value;
  //   const cities: FormControl = group.get('chips') as FormControl;

  //   if (modes && modes.length > 0) {
  //     switch (modes.length) {
  //       case 0:
  //         cities.setValue([]);
  //         cities.disable();
  //         return ctrl.validator;
  //       case 1:
  //         if (modes[0] === 1) {
  //           cities.setValue([]);
  //           cities.disable();
  //           return null;
  //         } else {
  //           cities.enable();
  //           if (cities && cities.value > 0) return null;
  //           else return ctrl.validator;
  //         }
  //       case 2:
  //         cities.enable();
  //         if (cities && cities.value > 0) return null;
  //         else return ctrl.validator;
  //     }
  //   }

  //   cities.disable();
  //   cities.setValue([]);

  //   return ctrl.validator;
  // }

  // autocomplete: {
  //   component: AbstractSelectAutoCompleteComponent,
  //   name: 'autocomplete',
  //   label: 'טסט סלקט',
  //   type: 'text',
  //   validators: [
  //     // AutocompleteStringValidator.autocompleteStringValidator(
  //     //   this.getOptionsMockDropSelect()
  //     // ),
  //   ],
  //   data: {
  //     options$: of([
  //       { name: 'אירועים', hebName: 'אירועים', id: 1 },
  //       { name: 'כללי', hebName: 'כללי', id: 2 },
  //     ]),
  //   },
  //   errors: [
  //     {
  //       name: 'required',
  //       message: 'שדה חובה',
  //     },
  //     {
  //       name: 'invalidAutocompleteString',
  //       message: 'בחר עיר מתוך הרשימה, חפש עם השלמה אוטומטית.',
  //     },
  //   ],
  // },
  // checkbox: {
  //   component: AbstractCheckListComponent,
  //   name: 'checkbox',
  //   label: 'צק בוקס',
  //   type: '',
  //   placeholder: 'בחר בוקס',
  //   validators: [Validators.required],
  //   data: {
  //     options$: of([
  //       { name: 'אונליין', id: 1 },
  //       { name: 'פרונטלי', id: 2 },
  //     ]),
  //     validate: (control: AbstractControl) =>
  //       this.CheckBoxValidation(control),
  //   },
  //   errors: [
  //     {
  //       name: 'required',
  //       message: 'שדה חובה',
  //     },
  //   ],
  // },
  // chips: {
  //   component: AbstractChipsSelectComponent,
  //   name: 'chips',
  //   label: 'ציפס',
  //   type: '',
  //   placeholder: 'בחר ציפ',
  //   validators: [Validators.required],
  //   data: {
  //     // isDisabled:true,
  //     property: { value: [], disabled: true },
  //     options$: of([
  //       { name: 'אירועים', hebName: 'אירועים', id: 1 },
  //       { name: 'כללי', hebName: 'כללי', id: 2 },
  //     ]),
  //   },
  //   errors: [
  //     {
  //       name: 'required',
  //       message: 'שדה חובה',
  //     },
  //   ],
  // },
  // currency: {
  //   component: AbstractCurrencyInputComponent,
  //   name: 'currency',
  //   label: 'מטבע',
  //   type: 'number',
  //   subtype: 'currency',
  //   placeholder: '0',
  //   validators: [],
  //   data: {},
  //   errors: [
  //     {
  //       name: 'maxlength',
  //       message: 'maxLength error',
  //     },
  //   ],
  // }
}
