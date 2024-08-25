import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';
import { Observable, shareReplay } from 'rxjs';
import { StudentModel } from '../configs-student/student-model';
import { IPaginationByKeyFilter, IUserTotalPgn } from '../../../administration/admin-helpers/pagination-and-filters-configs';




@Injectable()
export class StudentDataService  {

  private baseUrl: string = environment.endPointApi + '/student';

  constructor(private http: HttpClient) {}

  getStudent(id: string): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.baseUrl + '/' + id).pipe(shareReplay(1));
  }
  getStudents(): Observable<Array<StudentModel>> {
    return this.http.get<Array<StudentModel>>(this.baseUrl).pipe(shareReplay(1));
  }
  createStudent(student: StudentModel): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }
  updateStudent(id: string, student: StudentModel): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, student);
  }
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  searchStudentsByKey( searchDetails: IPaginationByKeyFilter): Observable<IUserTotalPgn<StudentModel>> {
    return this.http.post<IUserTotalPgn<StudentModel>>(`${this.baseUrl}/search-students-by-key`, searchDetails);
  }

}


