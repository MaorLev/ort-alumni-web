import { catchError, EMPTY, Observable, of, shareReplay } from 'rxjs';

import { HttpClient, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { TeacherModel } from './teacher-model';

import { toFormData } from '@utils/util-tools';
import { ResponseMassege } from './response-massege.type';

@Injectable({
  providedIn: 'root',
})
export class TeacherDataService {
  baseUrl: string = environment.endPointApi + '/teacher';
  baseUrlImg: string = environment.endPointApi + '/Image';
  constructor(private http: HttpClient) {}

  getTeacherByAlumnus(alumnusId: string): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(`${this.baseUrl}/${alumnusId}`);
  }
  getTeachers(): Observable<Array<TeacherModel>> {
    return this.http.get<Array<TeacherModel>>(this.baseUrl);
  }

  updateTeacher(id: string, teacher: TeacherModel): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, teacher);
  }
  deleteTeacher(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  createTeacher(teacher: TeacherModel, alumnusId: number): Observable<any> {
    teacher.alumnusid = alumnusId;
    teacher.courseids = this.ArrayToIdsArray(teacher.courseids);
    return this.http.post(this.baseUrl, teacher);
  }

  ArrayToIdsArray(arr: any[]): number[] {
    const newArr: number[] = [];
    arr.forEach((item) => {
      if (!!item && item.id) newArr.push(item.id);
    });
    return newArr;
  }

  AddLogo(
    file: FormData,
    teacherId: string
  ): Observable<HttpEvent<ResponseMassege>> {
    const imageFile = { image: file };
    return this.http.post<ResponseMassege>(
      `${this.baseUrl}/UploadLogo/${teacherId}`,
      toFormData(imageFile),
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  deleteTeacherLogo(alumnusId: string): Observable<HttpEvent<any>> {
    return this.http.delete(this.baseUrl + `/DeleteLogo/${alumnusId}`, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //  async AddOnleyImageNew(file:FormData, header:any)
  //  {
  //    return this.http.post(this.baseUrl+"/Add",file,{
  //      headers: new HttpHeaders().set('Authorization', header)
  //       }).toPromise<any>();
  //  };
}

export interface IdAndName {
  id: string;
  name: string;
}
