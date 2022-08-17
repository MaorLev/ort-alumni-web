import { AbstractControl, ValidatorFn } from '@angular/forms';

export class AutocompleteStringValidator {
  static autocompleteStringValidator(validOptions: any[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      debugger;
      if (control?.value != null && typeof(control?.value) !== 'string' ) {
        let item;
        //situation control is object
        if (typeof(control.value) === 'object')
        item = control.value;
        //situation control is array
        else {
          item = control.value[control.value.length - 1];
        }

        for (let i = 0; i < validOptions.length; i++)
          if (validOptions[i].id == item.id) return null;
      }
      return { invalidAutocompleteString: { value: control.value } };
    };
  }
}
