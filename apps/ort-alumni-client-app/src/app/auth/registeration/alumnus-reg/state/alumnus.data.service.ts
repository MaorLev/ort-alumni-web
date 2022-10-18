import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable, shareReplay } from 'rxjs';
import { AlumnusModel } from './alumnus-model';



@Injectable({ providedIn: 'root' })
export class AlumnusDataService  {

  private baseUrl: string = environment.endPointApi + '/alumnus';

  constructor(private http: HttpClient) {}

  getAlumnus(id: number | null): Observable<AlumnusModel> {
    return this.http.get<AlumnusModel>(this.baseUrl + '/' + id).pipe(shareReplay(1));
  }
  getAlumni(): Observable<Array<AlumnusModel>> {
    return this.http.get<Array<AlumnusModel>>(this.baseUrl).pipe(shareReplay(1));
  }
  createAlumnus(alumnus: AlumnusModel): Observable<any> {
    debugger;
    console.log(this.baseUrl);
    return this.http.post(this.baseUrl, alumnus);
  }
  updateAlumnus(id: number, alumnus: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, alumnus);
  }
  deleteAlumnus(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}


