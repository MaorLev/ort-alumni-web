import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { SessionDataService } from "../../auth/session/state/session.data.service";

export function uniqueEmailValidator(_auth: SessionDataService): AsyncValidatorFn {
  return (
    c: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return _auth.CheckEmail(c.value).pipe(
      map((result: boolean) => {
        return result ? { usernameAlreadyExists: true } : null;
      })
    );
  };
}