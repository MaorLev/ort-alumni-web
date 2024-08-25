import { SessionState } from './session.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { credentials } from '../../login/credentials.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SessionDataService {
  baseUrl?: string = environment.endPointApi + '/auth';
  constructor(private httpClient: HttpClient) {}
  login(creds: credentials): Observable<SessionState> {
    return this.httpClient.post<SessionState>(`${this.baseUrl}/login`, creds);
  }

  emailTakenValidator(): (
    control: AbstractControl
  ) => Observable<ValidationErrors | null> {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.httpClient
        .get<boolean>(
          this.baseUrl +
            '/' +
            'CheckEmail' +
            '?email=' +
            JSON.stringify(control.value)
        )
        .pipe(
          debounceTime(300),
          map((isTaken) => (isTaken ? { emailTaken: true } : null)),
          catchError(() => of(null))
        );
    };
  }

  sendResetLink(data: credentials): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/SendResetLink`, data);
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/ResetPassword`, {
      email,
      newPassword,
    });
  }

  CheckEmail(email: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      this.baseUrl + '/' + 'CheckEmail' + '?email=' + JSON.stringify(email)
    );
  }
}
