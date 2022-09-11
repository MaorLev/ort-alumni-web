import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import {
  catchError,
  map,
  Observable,
  of,
  take,
  BehaviorSubject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingGoogleApiService {
  loaded = new BehaviorSubject<boolean>(false);

  get Loaded(): Observable<boolean> {
    return this.loaded.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    if (this.loaded.getValue() === false) {
      this.apiLoaded();
    }
  }

  apiLoaded() {
    this.httpClient
      .jsonp(`${environment.API_GOOGLE_MAP_KEY}&libraries=places`, 'callback')
      .pipe(
        take(1),
        map(() => true),
        catchError(() => of(false))
      ).subscribe((res)=> {
        this.loaded.next(res);
      });
  }
}
