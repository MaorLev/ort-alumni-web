import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable, shareReplay } from 'rxjs';
import { StudentInterface } from './student.model';


@Injectable({ providedIn: 'root' })
export class StudentDataService  {

  private baseUrl: string = environment.endPointApi + '/student';

  constructor(private http: HttpClient) {}

  getStudent(id: number | null): Observable<StudentInterface> {
    return this.http.get<StudentInterface>(this.baseUrl + '/' + id).pipe(shareReplay(1));
  }
  getStudents(): Observable<Array<StudentInterface>> {
    return this.http.get<Array<StudentInterface>>(this.baseUrl).pipe(shareReplay(1));
  }
  createStudent(student: StudentInterface): Observable<any> {
    debugger;
    console.log(this.baseUrl);
    return this.http.post(this.baseUrl, student);
  }
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, student);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}


