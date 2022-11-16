import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { TeacherModel } from './teacher-model';
import { CityInterface } from '../../student-reg/state/student.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService {
  baseUrl: string = environment.endPointApi + '/teacher';
  baseUrlImg: string = environment.endPointApi + '/Image';
  constructor(private http: HttpClient) {}

  getTeacher(id: number | null): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(this.baseUrl + '/' + id);
  }
  getTeachers(): Observable<Array<TeacherModel>> {
    return this.http.get<Array<TeacherModel>>(this.baseUrl);
  }

  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, teacher);
  }
  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  createTeacher(teacher: TeacherModel, alumnusId:number): Observable<any> {
    debugger;
    teacher.alumnusid = alumnusId;
    teacher.courseids = this.ArrayToIdsArray(teacher.courseids);

    // const te: TeacherModel = {
    //   mailforstudy: 'sdcsdcsd',

    //   logo: 'sdcsdc',
    //   rate: 'sdcdscsd',
    //   description: 'sdcsdcsddscdsc',
    //   alumnusid: 7,
    //   courseids: [],
    //   cities: [],
    //   modestudyids: [],
    //   languages: []
    // };
    return this.http.post(this.baseUrl, teacher);
  }


  ArrayToIdsArray(arr:any []):number [] {
    const newArr:number [] = [];
    arr.forEach(item => {
      if(!!item && item.id)
      newArr.push(item.id);
    })
    return newArr;
  }

  AddLogo(file: FormData): Observable<any> {
    const name = 'ImgTeacher';
    return this.http.post(this.baseUrlImg + '/Add/' + name, file);
  }

  //  async AddOnleyImageNew(file:FormData, header:any)
  //  {
  //    return this.http.post(this.baseUrl+"/Add",file,{
  //      headers: new HttpHeaders().set('Authorization', header)
  //       }).toPromise<any>();
  //  };
}


export interface IdAndName {
  id:string;
  name:string;
}