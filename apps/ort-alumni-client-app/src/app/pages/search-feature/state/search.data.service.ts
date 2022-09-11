import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';

@Injectable({
  providedIn: 'root',
})
export class searchDataService {
  private baseUrl?: string = environment.endPointApi + '/auth';
  constructor(private httpClient: HttpClient){}
  searchPages(word:string): Observable<unknown> {
    // eslint-disable-next-line no-debugger

    return this.httpClient.get(`${this.baseUrl}/searchContent/${word}`) as Observable<unknown>
  }
}
