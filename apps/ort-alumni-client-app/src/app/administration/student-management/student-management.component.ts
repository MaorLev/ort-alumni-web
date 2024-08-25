import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { StudentService } from '../../entities/student/state-student/student.service';
import { StudentStore } from '../../entities/student/state-student/student.store';
import { StudentQuery } from '../../entities/student/state-student/student.query';
import { StudentModel } from '../../entities/student/configs-student/student-model';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IPaginationByKeyFilter, PaginationKeyFilterInitialization } from '../admin-helpers/pagination-and-filters-configs';
import { inputFilterByKeyDataConfig } from '../admin-helpers/input-filter-by-key.data';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentManagementComponent implements OnInit, OnDestroy {
  students$: Observable<StudentModel[] | undefined>;
  searchRequest: IPaginationByKeyFilter;
  headers: string[];
  keyControl: FormControl = new FormControl();
  onDestroy$: Subject<void>;
  keyConfig: VaFormInputInterface = inputFilterByKeyDataConfig;

  constructor(
    private studentService: StudentService,
    private studentStore: StudentStore,
    private studentQuery: StudentQuery,
    private router: Router
  ) {
    this.onDestroy$ = new Subject();
    this.searchRequest = {...PaginationKeyFilterInitialization};
    this.headers = ['מזהה', 'אימייל', 'שם', 'טלפון', 'ת"ז', 'עריכה', 'מחיקה'];
  }

  ngOnInit(): void {
    this.onSearchByKey();

    this.loadStudents();
  }
  goToUpdateStudent(studentId: string) {
    this.studentStore.setEntityActive(studentId);
    this.router.navigate([
      '/admin-dashboard-layout/management-shell/profile-student',
    ]);
  }
  onDeleteStudent(studentId: string) {
    this.studentService
      .deleteStudent(studentId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  loadStudents() {
    this.students$ = this.studentQuery.selectStudents$.pipe(
      tap((students) => {
        // console.log('Query', students);
      })
    );
  }

  onSearchByKey() {
    this.keyControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(300),
        distinctUntilChanged(),
        filter((key) => !!key),
        startWith(''),
        switchMap((key) => {
          this.searchRequest = { ...this.searchRequest, key };
          return this.studentService.searchStudentsByKeyAndLoad(
            this.searchRequest
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
