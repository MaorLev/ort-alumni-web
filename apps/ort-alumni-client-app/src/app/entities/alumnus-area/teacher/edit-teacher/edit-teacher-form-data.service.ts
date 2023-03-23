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

import { AbstractDatePickerComponent } from '@features/feature-va-date-picker';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractPhoneComponent } from '@features/feature-va-phone';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { AbstractChipsSelectComponent } from '@features/va-chips-select';
import { ConfigControlsStateType } from '../../../../layout/profile-layout/config-controls-state.type';

import { of } from 'rxjs';
import { TeacherDataService } from '../state-teacher/teacher-data.service';
import { AbstractCurrencyInputComponent } from '@ort-alumni-web/ort-alumni-client-lib-features-feature-va-currency-input';

@Injectable()
export class EditTeacherFormData {
  constructor(private teacherDataService: TeacherDataService) {}

  teacherControls(): ConfigControlsStateType {
    return {
      profileName: 'Teacher',
      NavigationData: {
        routesData: [
          {
            label: 'פרטי מורה',
            name: 'teacher-details',
            route: 'teacher-details',
          },
          {
            label: 'פרטי שיעור',
            name: 'lesson-details',
            route: 'lesson-details',
          },
          { label: 'שינוי תמונה', name: 'image-edit', route: 'image-edit' },
        ],
        alignment: 'horizontal',
        routingMethod: 'output',
      },
      groups: [
        {
          groupName: 'teacher-details',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            mailforstudy: {
              component: AbstractInputComponent,
              name: 'mailforstudy',
              label: 'אימייל',
              type: 'text',
              placeholder: 'pat@example.com',
              validators: [
                Validators.required,
                // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
              ],
              data: {},
              errors: [
                {
                  name: '',
                  message: 'אימייל קיים במערכת',
                },
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
                {
                  name: 'pattern',
                  message: 'הזן אימייל תקין',
                },
              ],
            },
            description: {
              component: AbstractTextareaComponent,
              name: 'description',
              label: 'תאור עצמי',
              placeholder: 'לדוגמה , יש לי ניסיון בסי שארפ, עובד בתעשייה...',
              styleClass: '',
              data: { maxLengthValue: 7000 },
              validators: [Validators.required, Validators.maxLength(160)],
              errors: [
                {
                  name: 'maxlength',
                  message: 'לפחות 15 אותיות',
                },
              ],
            },
            languages: {
              component: AbstractSelectComponent,
              name: 'languages',
              label: 'שפות',
              placeholder: 'בחר מכללה בה למדת',
              validators: [],
              data: {
                isMultiple: true,
                limitation: 4,
                options$: of([
                  { name: 'ort_jr', hebName: 'אורט ירושלים', id: 1 },
                  { name: 'אנגלית', hebName: 'אורט בראודה', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'בחר לפחות שפה אחת',
                },
                {
                  name: 'selectionLimitExceeded',
                  message: 'מקסימום 4 שפות',
                },
              ],
            },
          },
        },
        {
          groupName: 'lesson-details',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            courseids: {
              component: AbstractSelectComponent,
              name: 'courseids',
              label: 'קורסים',
              placeholder: 'אילו קורסים אתה מעביר',
              styleClass: '',
              validators: [Validators.required],
              data: {
                isMultiple: true,
                options$: of([
                  { name: 'ort_jr', hebName: 'אורט ירושלים', id: 1 },
                  { name: 'ort_br', hebName: 'אורט בראודה', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'בחר לפחות קורס אחד',
                },
              ],
            },
            modestudyids: {
              component: AbstractCheckListComponent,
              name: 'modestudyids',
              label: 'מצב למידה',
              type: '',
              placeholder: 'אנא בחר',
              validators: [Validators.required],
              data: {
                options$: of([
                  { name: 'אונליין', id: 2 },
                  { name: 'פרונטלי', id: 1 },
                ]),
                validate: (control: AbstractControl) =>
                  this.CheckBoxValidation(control),
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
              ],
            },
            cities: {
              component: AbstractChipsSelectComponent,
              name: 'cities',
              label: 'ערים בהן תלמד',
              type: '',
              placeholder: 'בחר עיר/ים',
              validators: [Validators.required],
              data: {
                property: { value: [], disabled: false },
                options$: of([
                  { name: 'אירועים', hebName: 'אירועים', id: 1 },
                  { name: 'כללי', hebName: 'כללי', id: 2 },
                ]),
              },
              errors: [
                {
                  name: 'required',
                  message: 'שדה חובה',
                },
              ],
            },
            rate: {
              component: AbstractCurrencyInputComponent,
              name: 'rate',
              label: 'שכר לשעה',
              type: 'number',
              subtype: 'currency',
              placeholder: '0',
              validators: [],
              data: {},
              errors: [
                {
                  name: 'maxlength',
                  message: 'maxLength error',
                },
              ],
            },
          },
        },
        {
          groupName: 'image-edit',
          buttons: [{ label: 'עדכן', type: 'submit', className: 'btn' }],
          styleStructure: 'fullWidth',
          controls: {
            logo: {
              component: AbstractFileUploadComponent,
              name: 'logo',
              label: 'גרור ושחרר תמונה עבור כרטיס המורה',
              type: '',
              validators: [
                // Validators.required,
                requiredFileType(['png', 'jpg', 'jpeg']),
              ],
              data: {
                property: { value: null, disabled: false },
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
        },
      ],
    };
  }

  CheckBoxValidation(ctrl: AbstractControl): ValidatorFn | null {
    const group = ctrl.parent as FormGroup;
    const modes = ctrl.value;
    const chipsControl: FormControl = group.get('cities') as FormControl;

    if (modes && modes.length > 0) {
      switch (modes.length) {
        case 0:
          chipsControl.setValue([]);
          chipsControl.disable();
          return ctrl.validator;
        case 1:
          if (modes[0] === 2) {
            chipsControl.setValue([]);
            chipsControl.disable();
            return null;
          } else {
            chipsControl.enable();
            if (chipsControl && chipsControl.value > 0) return null;
            else return ctrl.validator;
          }
        case 2:
          chipsControl.enable();
          if (chipsControl && chipsControl.value > 0) return null;
          else return ctrl.validator;
      }
    }

    chipsControl.disable();
    chipsControl.setValue([]);

    return ctrl.validator;
  }
}
