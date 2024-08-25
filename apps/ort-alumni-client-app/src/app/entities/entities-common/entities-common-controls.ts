import {
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
export interface ControlConfigs {
  name: string;
  label: string;
  placeholder?: string;
  styleClass?: string;
  type?: string;
  styles?: StylesControl;
  subtype?: string;
  data: VaDataInterface;
  validators: ValidatorFn[] | ValidationErrors;
  asyncValidators?: AsyncValidatorFn[];
  errors?: VaErrorsInterface[];
}

import { ControlsFactory, asyncNullValidator } from '../../app-helpers/controls-factory';
import {
  StylesControl,
  VaDataInterface,
  VaErrorsInterface,
  VaFormInputInterface,
} from '@utils/core/global-interfaces';
import { CityInterface } from '../static-entities-backend-data/static-entities-interfaces/city.Interface';
import { CollegeInterface } from '../static-entities-backend-data/static-entities-interfaces/college.interface';
import { StudyProgramInterface } from '../static-entities-backend-data/static-entities-interfaces/study-program.interface';

export class EntitiesCommonControls extends ControlsFactory {
  constructor() {
    super();
  }
  static Firstname = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'firstname',
      label: 'שם פרטי',
      type: 'text',
      validators: [Validators.maxLength(10)],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
        {
          name: 'maxLength',
          message: 'מקסימום 10 אותיות',
        },
      ],
    });
  };
  static Token = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'token',
      label: 'טוקן',
      type: 'text',
      validators: [],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
        {
          name: 'maxLength',
          message: 'מקסימום 10 אותיות',
        },
      ],
    });
  };
  static Lastname = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'lastname',
      label: 'שם משפחה',
      type: 'text',
      validators: [Validators.maxLength(10)],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
        {
          name: 'maxLength',
          message: 'מקסימום 10 אותיות',
        },
      ],
    });
  };

  static Email = (asyncEmailValidator?:any): VaFormInputInterface => {
    return this.basicInput({
      name: 'email',
      label: 'אימייל',
      type: 'text',
      placeholder: 'pat@example.com',
      validators: [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
      // asyncValidators:[asyncEmailValidator ? asyncEmailValidator() : asyncNullValidator],
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

  static Password = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'password',
      label: 'סיסמא',
      type: 'password',
      placeholder: 'סיסמא',
      validators: [Validators.required, Validators.minLength(6)],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
        {
          name: 'minlength',
          message: 'נדרש לפחות 6 תווים',
        },
      ],
    });
  };

  static Phone = (): VaFormInputInterface => {
    return this.phoneInput({
      name: 'phone',
      label: 'טלפון',
      type: 'text',
      placeholder: '050-555-1234',
      validators: [
        Validators.nullValidator,
        Validators.pattern('^0\\d([\\d]{0,1})([-]{0,1})\\d{7}$'),
      ],
      data: {},
      errors: [
        {
          name: 'pattern',
          message: 'נדרש מספר תקין',
        },
      ],
    });
  };

  static Dateofbirth = (): VaFormInputInterface => {
    return this.datePickerInput({
      name: 'dateofbirth',
      label: 'תאריך לידה',
      validators: [],
      data: {},
      errors: [],
    });
  };
  static Cardid = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'cardid',
      label: 'תעודת זהות',
      type: 'text',
      validators: [Validators.required,Validators.maxLength(12)],
      data: {},
      errors: [
        {
          name: 'maxLength',
          message: 'מקסימום 12 מספרים',
        },
      ],
    });
  };
  static City = (list: CityInterface[]): VaFormInputInterface => {
    return this.selectAutoCompleteInput({
      name: 'city',
      label: 'עיר',
      type: 'text',
      validators: [
        Validators.required,
      ],
      data: {
        options: list ? list : [],
      },
      errors: [
        {
          name: 'required',
          message: `שדה חובה.בחר מן הרשימה, חפש עם השלמה אוטומטית.`,
        },
      ],
    });
  };
  static College = (list: CollegeInterface[]): VaFormInputInterface => {
    return this.selectInput({
      name: 'college',
      label: 'מכללה',
      type: '',
      placeholder: 'בחר מכללה בה למדת',
      validators: [Validators.required],
      data: {
        isMultiple: false,
        options: list ? list : [],
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };
  static Studyprogram = (
    list: StudyProgramInterface[],isDisabled?: boolean
  ): VaFormInputInterface => {
    return this.selectInput({
      name: 'studyprogram',
      label: 'מגמה',
      type: '',
      placeholder: 'בחר מגמה',
      validators: [Validators.required],
      data: {
        property: { value: undefined, disabled: isDisabled ? isDisabled : false },
        isMultiple: false,
        options: list ? list : [],
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };
  static Studystartyear = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'studystartyear',
      label: 'שנת תחילת לימודים',
      type: 'text',
      validators: [Validators.maxLength(4)],
      data: {},
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
        {
          name: 'maxLength',
          message: 'מקסימום 4 מספרים',
        },
      ],
    });
  };
}
