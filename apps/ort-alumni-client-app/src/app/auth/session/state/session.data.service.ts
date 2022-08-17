import { SessionState } from './session.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { credentials } from '../../login/credentials.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';

@Injectable({
  providedIn: 'root',
})
export class SessionDataService {
  baseUrl?: string = environment.endPointApi + '/auth';
  constructor(private httpClient: HttpClient){}
  login(creds: credentials): Observable<SessionState> {
    return this.httpClient.post<SessionState>(`${this.baseUrl}/login`, creds);
  }

  resetPassword(email:string):Observable<string>{
    return this.httpClient.post<string>(`${this.baseUrl}/resetpassword`,email);
  }


  CheckEmail(email: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      this.baseUrl + '/' + 'CheckEmail' + '?email=' + JSON.stringify(email)
    );
  }
}
