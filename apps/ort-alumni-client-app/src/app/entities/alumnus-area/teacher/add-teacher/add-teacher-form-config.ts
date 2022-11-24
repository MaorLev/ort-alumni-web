import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ButtonAction } from '@ui-components/ui-button';
import { StepsForm } from '@features/feature-expansion-panel';
import { AbstractDatePickerComponent } from '@features/feature-va-date-picker';
import { AbstractSelectComponent } from '@features/feature-va-dropdown-selection';
import { AbstractInputComponent } from '@features/feature-va-input';
import { AbstractPhoneComponent } from '@features/feature-va-phone';
import { AbstractSelectAutoCompleteComponent } from '@features/feature-va-select-auto-complete';
import { AbstractTextareaComponent } from '@features/feature-va-textarea';
import { of } from 'rxjs';
import { AbstractCurrencyInputComponent } from '@ort-alumni-web/ort-alumni-client-lib-features-feature-va-currency-input';
import { AbstractCheckListComponent } from '@features/feature-check-list';
import { AbstractChipsSelectComponent } from '@features/va-chips-select';
import {
  AbstractFileUploadComponent,
  requiredFileType
} from '@features/feature-file-upload';

@Injectable({
  providedIn: 'root'
})
export class TeacherFormConfig {
  constructor() {}

  readonly teacherForms: StepsForm[] = [
    {
      groupStepsName: 'TeacherForm',
      groupId: 1,
      content: { header: 'רישום מורה' },
      steps: [
        {
          stepName: '',
          order: 1,
          stepHeader: { title: 'פרטי מורה', description: '', icon: '' },
          stepContent: { header: '', subheader: '', content: '' },
          stepGroupForm: {
            groupName: '',
            buttons: [],
            styleStructure: 'style-grid',
            controls: {
              mailforstudy: {
                component: AbstractInputComponent,
                name: 'mailforstudy',
                label: 'אימייל',
                type: 'text',
                placeholder: 'pat@example.com',
                validators: [
                  Validators.required
                  // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
                data: {},
                errors: [
                  {
                    name: '',
                    message: 'אימייל קיים במערכת'
                  },
                  {
                    name: 'required',
                    message: 'שדה חובה'
                  },
                  {
                    name: 'pattern',
                    message: 'הזן אימייל תקין'
                  }
                ]
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
                    { name: 'פרונטלי', id: 1 }
                  ]),
                  validate: (control: AbstractControl) =>
                    this.CheckBoxValidation(control)
                },
                errors: [
                  {
                    name: 'required',
                    message: 'שדה חובה'
                  }
                ]
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
                    message: 'לפחות 15 אותיות'
                  }
                ]
              },
              cities: {
                component: AbstractChipsSelectComponent,
                name: 'cities',
                label: 'ערים בהן תלמד',
                type: '',
                placeholder: 'בחר עיר/ים',
                validators: [Validators.required],
                data: {
                  property: { value: [], disabled: true },
                  options$: of([
                    { name: 'אירועים', hebName: 'אירועים', id: 1 },
                    { name: 'כללי', hebName: 'כללי', id: 2 }
                  ])
                },
                errors: [
                  {
                    name: 'required',
                    message: 'שדה חובה'
                  }
                ]
              }
            }
          },
          stepButtons: [
            {
              name: 'AgreeAndContinue',
              label: 'אשר והמשך',
              role: ButtonAction.StepSubmited,
              color: 'accent',
              className: 'mat-raised-button'
            }
          ]
        },

        {
          stepName: '',
          stepHeader: { title: 'המשך פרטים', description: '', icon: '' },
          order: 2,
          stepContent: { header: '', subheader: '', content: '' },
          stepGroupForm: {
            groupName: '',
            buttons: [],
            styleStructure: 'style-grid',

            controls: {
              languages: {
                component: AbstractSelectComponent,
                name: 'languages',
                label: 'שפות',
                placeholder: 'בחר מכללה בה למדת',
                validators: [Validators.required],
                data: {
                  isMultiple: true,
                  options$: of([
                    { name: 'ort_jr', hebName: 'אורט ירושלים', id: 1 },
                    { name: 'ort_br', hebName: 'אורט בראודה', id: 2 }
                  ])
                },
                errors: [
                  {
                    name: 'required',
                    message: 'בחר לפחות שפה אחת'
                  }
                ]
              },
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
                    { name: 'ort_br', hebName: 'אורט בראודה', id: 2 }
                  ])
                },
                errors: [
                  {
                    name: 'required',
                    message: 'בחר לפחות קורס אחד'
                  }
                ]
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
                    message: 'maxLength error'
                  }
                ]
              }
            }
          },
          stepButtons: [
            {
              name: 'Preview',
              label: 'הקודם',
              role: ButtonAction.Prev,
              color: 'accent',
              className: 'mat-raised-button'
            },
            {
              name: 'Submit',
              label: 'סיימתי',
              role: ButtonAction.StepsSubmited,
              color: 'accent',
              className: 'mat-raised-button'
            }
          ]
        }
      ]
    },
    {
      groupStepsName: 'TeacherLogoForm',
      groupId: 2,
      content: { header: 'העלאת תמונה וסיום' },
      steps: [
        {
          stepName: '',
          order: 1,
          stepHeader: { title: 'העלאת תמונה', description: '', icon: '' },
          stepContent: { header: 'העלה תמונה', subheader: '', content: '' },
          stepGroupForm: {
            groupName: '',
            buttons: [],
            styleStructure: 'fullWidth',
            controls: {
              image: {
                component: AbstractFileUploadComponent,
                name: 'image',
                label: '',
                type: '',
                validators: [
                  Validators.required,
                  requiredFileType(['png', 'jpg', 'jpeg'])
                ],
                data: {
                  property: { value: null, disabled: false },
                  nameBefore: null
                },
                errors: [
                  {
                    name: 'required',
                    message: 'שדה חובה'
                  },
                  {
                    name: 'requiredFileType',
                    message: 'נדרשת תמונת בעלת אחת הסיומות: .png, .jpg, .jpeg'
                  }
                ]
              }
            }
          },
          stepButtons: [
            {
              name: 'Submit',
              label: 'סיימתי',
              role: ButtonAction.StepsSubmited,
              color: 'accent',
              className: 'mat-raised-button'
            }
          ]
        },
        {
          stepName: '',
          stepHeader: { title: 'סיום', description: '', icon: '' },
          order: 2,
          stepContent: {
            header: 'נרשמת בהצלחה',
            subheader: 'כעת ניתן לבצע התחברות',
            content: ''
          },
          stepGroupForm: {
            groupName: '',
            buttons: [],
            controls: {}
          },
          stepButtons: [
            {
              name: 'RouteTo',
              label: 'התחבר למערכת',
              route: '/auth/login',
              role: ButtonAction.RouteTo,
              color: 'accent',
              className: 'mat-raised-button'
            }
          ]
        }
      ]
    }
  ];

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
