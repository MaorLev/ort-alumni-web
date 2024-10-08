import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable, shareReplay } from 'rxjs';
import { AlumnusModel } from '../configs-alumnus/alumnus-model';
import {
  IPaginationByKeyFilter,
  IUserTotalPgn,
} from 'apps/ort-alumni-client-app/src/app/administration/admin-helpers/pagination-and-filters-configs';

@Injectable()
export class AlumnusDataService {
  private baseUrl: string = environment.endPointApi + '/alumnus';

  constructor(private http: HttpClient) {}

  getAlumnus(id: string): Observable<AlumnusModel> {
    return this.http
      .get<AlumnusModel>(this.baseUrl + '/' + id)
      .pipe(shareReplay(1));
  }
  getAlumni(): Observable<Array<AlumnusModel>> {
    return this.http
      .get<Array<AlumnusModel>>(this.baseUrl)
      .pipe(shareReplay(1));
  }
  createAlumnus(alumnus: AlumnusModel): Observable<any> {
    return this.http.post(this.baseUrl, alumnus);
  }
  updateAlumnus(id: string, alumnus: AlumnusModel): Observable<any> {
    alumnus.id = id;
    return this.http.put(this.baseUrl + '/' + id, alumnus);
  }
  deleteAlumnus(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  GetAlumniTeachersByPagination(
    pageIndex: number,
    pageSize: number
  ): Observable<AlumnusModel[]> {
    return this.http.get<AlumnusModel[]>(
      this.baseUrl +
        `/last-teachers?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
  searchAlumniByKey(
    searchDetails: IPaginationByKeyFilter
  ): Observable<IUserTotalPgn<AlumnusModel>> {
    return this.http.post<IUserTotalPgn<AlumnusModel>>(
      `${this.baseUrl}/search-alumni-by-key`,
      searchDetails
    );
  }
}
