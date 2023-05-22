import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../configs-student/student-model';

import { StudentQuery } from '../state-student/student.query';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailComponent implements OnInit {
  studentModel$: Observable<StudentModel | undefined>;
  constructor(
    public studentQuery: StudentQuery
  ) {

  }

  ngOnInit(): void {

    this.studentModel$ = this.studentQuery.selectActiveStudent$;
  }
}
