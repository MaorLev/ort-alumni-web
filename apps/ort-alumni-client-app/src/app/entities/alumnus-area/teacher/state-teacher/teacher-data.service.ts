import { Observable } from 'rxjs';

import {
  HttpClient,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { TeacherModel } from '../configs-teacher/teacher-model';

import { toFormData } from '@utils/util-tools';
import { ResponseMassege } from '../configs-teacher/response-massege.type';
import { SearchBarTeacherModel } from '../../../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/state/search-bar-teacher.model';


@Injectable()
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

  createTeacher(teacher: TeacherModel, alumnusId: string): Observable<any> {
    teacher.alumnusid = alumnusId;

    return this.http.post(this.baseUrl, teacher);
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

  searchTeachers(pageIndex: number, pageSize: number, searchDetails: SearchBarTeacherModel): Observable<Array<TeacherModel>> {
    const body = {
      pageIndex,
      pageSize,
      ...searchDetails
    };
    return this.http.post<Array<TeacherModel>>(`${this.baseUrl}/search-teachers`, body);
  }
  GetAlumniTeachersByPagination( pageIndex: number, pageSize: number): Observable<TeacherModel []> {
    return this.http.get<TeacherModel []>(this.baseUrl + `/last-teachers?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }
}


export interface IdAndName {
  id: string;
  name: string;
}
