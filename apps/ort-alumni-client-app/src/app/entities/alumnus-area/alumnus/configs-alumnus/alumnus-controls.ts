import {
  Validators,
} from '@angular/forms';

import { VaFormInputInterface } from '@utils/core/global-interfaces';

import {
  EntitiesCommonControls
} from '../../../entities-common/entities-common-controls';


export class AlumnusControls extends EntitiesCommonControls {
  isEdit: boolean | undefined;

  constructor(IsEdit?: boolean) {
    super();
    this.isEdit = IsEdit ? IsEdit : undefined;

  }
  static Workplace = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'workplace',
      label: 'מקום עבודה נוכחי',
      type: '',
      placeholder: '',
      validators: [Validators.maxLength(7000)],
      data: { maxLengthValue: 7000 },
      errors: [
        {
          name: 'maxlength',
          message: 'maxLength error',
        },
      ],
    });
  };
  static Linkedin = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'linkedin',
      label: 'לינקדין',
      type: '',
      placeholder: 'הלינקדין שלך :)',
      validators: [Validators.maxLength(20)],
      data: {},
      errors: [
        {
          name: 'maxlength',
          message: '',
        },
      ],
    });
  };
  static Studyfinishyear = (): VaFormInputInterface => {
    return this.basicInput({
      name: 'studyfinishyear',
      label: 'שנת סיום לימודים',
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
