import { Validators } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { CategoryInterface } from '../state/category.interface';
import { Observable } from 'rxjs';
import { requiredFileType } from '@features/feature-file-upload';
import { ControlsFactory } from '../../../app-helpers/controls-factory';

export class ArticleControls extends ControlsFactory {
  constructor() {
    super();
  }
  static Author = (): VaFormInputInterface => {
    return this.basicInput({
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
    });
  };
  static Heading = (): VaFormInputInterface => {
    return this.basicInput({
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
    });
  };
  static SubHeading = (): VaFormInputInterface => {
    return this.basicInput({
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
    });
  };
  static Category = (
    list?: CategoryInterface[]
  ): VaFormInputInterface => {
    return this.selectInput({
      name: 'category',
      label: 'קטגוריה',
      type: '',
      placeholder: 'בחר קטגוריה',
      validators: [Validators.required],
      data: {
        isMultiple: false,
        options: list,
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };

  static Detail = (): VaFormInputInterface => {
    return this.textAreaInput({
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
    });
  };
  static Image = (
    isUpdate: boolean,
    imageNameBefore: string
  ): VaFormInputInterface => {
    return this.imageInput({
      name: 'image',
      label: 'גרור ושחרר תמונה עבור הפוסט',
      type: '',
      // validators: [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])],
      validators: [
        isUpdate ? Validators.nullValidator : Validators.required,
        requiredFileType(['png', 'jpg', 'jpeg']),
      ],
      data: {
        // isDisabled: isUpdate ? true : false,
        // property: { value: null, disabled: isUpdate ? true : false },
        property: { value: null, disabled: false },
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
    });
  };
}
