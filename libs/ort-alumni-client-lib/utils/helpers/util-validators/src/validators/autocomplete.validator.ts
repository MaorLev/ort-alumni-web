import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CustomOption } from '@utils/core/global-interfaces';

// export class AutocompleteStringValidator {
//   static autocompleteStringValidator(validOptions: any[]): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } | null => {

//       if (control?.value != null && typeof(control?.value) !== 'string' ) {
//         let item;
//         //situation control is object
//         if (typeof(control.value) === 'object')
//         item = control.value;
//         //situation control is array
//         else {
//           item = control.value[control.value.length - 1];
//         }

//         for (let i = 0; i < validOptions.length; i++)
//           if (validOptions[i].id == item.id) return null;
//       }
//       return { invalidAutocompleteString: { value: control.value } };
//     };
//   }
// }


export function optionValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as CustomOption;
    if (!value) {
      return null;
    }

    const { id, name } = value;

    if (typeof id !== 'number' || typeof name !== 'string') {
      return { invalidOption: true };
    }

    return null;
  };
}