import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { requiredFileType } from '@features/feature-file-upload';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { EntitiesCommonControls } from '../../../entities-common/entities-common-controls';
import { CityInterface } from '../../../static-entities-backend-data/static-entities-interfaces/city.Interface';
import { LanguageInterface } from '../../../static-entities-backend-data/static-entities-interfaces/language.interface';
import { CourseByStudyProgramInterface } from '../../../static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface';
import { ModeStudyInterface } from '../../../static-entities-backend-data/static-entities-interfaces/mode-study.interface';
import { SimpleInterface } from '@features/va-chips-select';

export class TeacherControls extends EntitiesCommonControls {
  constructor() {
    super();
  }
  static Mailforstudy = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'mailforstudy',
      label: 'מייל לקבלת תלמידים',
      type: 'text',
      placeholder: 'teacher@example.com',
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
    });
  };

  static Modestudyids = (options:ModeStudyInterface []): VaFormInputInterface => {
    return this.checkListInput({
      name: 'modestudyids',
      label: 'מצב למידה',
      type: '',
      placeholder: 'אנא בחר',
      validators: [Validators.required],
      data: {
        options: options,
        validate: (control: AbstractControl) =>
          this.CheckBoxValidation(control),
        style:'style-flex'
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };
  static Description = (): VaFormInputInterface => {
    return this.textAreaInput({
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
    });
  };
  static Cities = (
    options: CityInterface[]
  ): VaFormInputInterface => {
    return this.chipsSelectInput({
      name: 'cities',
      label: 'ערים בהן תלמד',
      type: '',
      placeholder: 'בחר עיר/ים',
      validators: [Validators.required],
      data: {
        // property: { value: [] as SimpleInterface[] },
        options: options,
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };
  static Languages = (options: LanguageInterface[]): VaFormInputInterface => {
    return this.selectInput({
      name: 'languages',
      label: 'שפות',
      placeholder: 'בחר מכללה בה למדת',
      validators: [],
      data: {
        isMultiple: true,
        limitation: 4,
        options: options,
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
    });
  };
  static Courses = (
    list?: CourseByStudyProgramInterface []
  ): VaFormInputInterface => {
    return this.selectInput({
      name: 'courses',
      label: 'קורסים',
      placeholder: 'אילו קורסים אתה מעביר',
      styleClass: '',
      validators: [Validators.required],
      data: {
        isMultiple: true,
        limitation: 10,
        options: list ? list : [],
      },
      errors: [
        {
          name: 'required',
          message: 'בחר לפחות קורס אחד',
        },
      ],
    });
  };
  static Rate = (): VaFormInputInterface => {
    return this.currencyInput({
      name: 'rate',
      label: 'שכר לשעה',
      type: 'number',
      subtype: 'currency',
      placeholder: '0',
      validators: [],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'חובה למלא שכר שעתי משוער',
        },
        {
          name: 'maxlength',
          message: 'maxLength error',
        },
      ],
    });
  };
  static Logo = (): VaFormInputInterface => {
    return this.imageInput({
      name: 'logo',
      label: 'גרור ושחרר תמונה',
      type: '',
      validators: [
        // Validators.required,
        requiredFileType(['png', 'jpg', 'jpeg']),
      ],
      data: {
        property: { value: null, disabled: false },
        nameBefore: null,
      },
      errors: [
        // {
        //   name: 'required',
        //   message: 'שדה חובה',
        // },
        {
          name: 'requiredFileType',
          message: 'נדרשת תמונת בעלת אחת הסיומות: .png, .jpg, .jpeg',
        },
      ],
    });
  };

  static CheckBoxValidation(ctrl: AbstractControl): ValidatorFn | null {
    const group = ctrl.parent as FormGroup;
    const modes = ctrl.value;
    const chipsControl: FormControl = group.get('cities') as FormControl;

    if (modes && modes.length > 0) {
      switch (modes.length) {
        case 0:
          chipsControl.disable();
          chipsControl.setValue([]);
          return ctrl.validator;
        case 1:
          if (modes[0] === 2) {
            chipsControl.disable();
            chipsControl.setValue([]);
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
