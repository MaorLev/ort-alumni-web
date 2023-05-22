import { FormControl, ValidationErrors } from "@angular/forms";

export function requiredFileType( types: string [] ) : ValidationErrors | null {
  return function (control: FormControl) {
    const file = control.value;
    if (file) {
      const name = file.name ? file.name : file.description;
      const lastDotIndex = name.lastIndexOf(".");
      const extension = name.substring(lastDotIndex + 1);
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