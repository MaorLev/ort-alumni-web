import { FormControl, ValidationErrors } from "@angular/forms";

export function requiredFileType( types: string [] ) : ValidationErrors | null {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      for (let index = 0; index < types.length; index++) {
        if ( types[index].toLowerCase() === extension.toLowerCase() ) {
          return null;
        }
      }
      return {
        requiredFileType: true
      };
    }

    return null;
  };
}