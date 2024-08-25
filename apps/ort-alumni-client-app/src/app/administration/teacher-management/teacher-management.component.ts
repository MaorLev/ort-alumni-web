import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { TeacherModel } from '../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
import {
  Observable,
  Subject,
  Subscription,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { TeacherService } from '../../entities/alumnus-area/teacher/state-teacher/teacher.service';
import { TeacherStore } from '../../entities/alumnus-area/teacher/state-teacher/teacher.store';
import { TeacherQuery } from '../../entities/alumnus-area/teacher/state-teacher/teacher.query';
import { Router } from '@angular/router';
import { SearchBarTeacherModel } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/state/search-bar-teacher.model';
import { ModeStudyMap } from '../../entities/static-entities-backend-data/static-entities-interfaces/mode-study.interface';
import { SearchBarTeacherQuery } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/state/search-bar-teacher.query';
import { SearchBarTeacherStore } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/state/search-bar-teacher.store';
import { cloneDeep } from '@utils/util-tools';
import { AlumnusStore } from '../../entities/alumnus-area/alumnus/state-alumnus/alumnus.store';

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherManagementComponent implements OnInit, OnDestroy {
  teachers$: Observable<TeacherModel[] | undefined>;
  headers: string[];
  onDestroy$: Subject<void>;
  subs: Subscription;
  teacherslength: number;
  currentResult: SearchBarTeacherModel;
  pageNumber: number;
  readonly pageSize: number;

  constructor(
    private searchBarQuery: SearchBarTeacherQuery,
    private searchBarStore: SearchBarTeacherStore,
    private teacherService: TeacherService,
    private teacherStore: TeacherStore,
    private teacherQuery: TeacherQuery,
    private alumnusStore: AlumnusStore,

    private router: Router
  ) {
    this.onDestroy$ = new Subject();
    this.headers = [
      ' מזהה מורה',
      'מזהה בוגר',
      'שם',
      'טלפון',
      'אימייל מורה',
      'עריכה',
      'מחיקה',
    ];

    this.teacherslength = 0;
    this.pageNumber = 1;
    this.pageSize = 8;
    this.currentResult = {} as SearchBarTeacherModel;
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.loadTeachers();

    this.subs = this.searchBarQuery.result$
      .pipe(
        startWith(this.currentResult),
        switchMap((result) => {
          this.currentResult = cloneDeep(result);
          return this.teacherService.searchAndLoadTeachers(
            this.pageNumber,
            this.pageSize,
            this.currentResult
          );
        })
      )
      .subscribe((teachers) => {
        if (teachers) {
          this.teacherslength = teachers.length;
          teachers.forEach((teacher) => this.alumnusStore.add(teacher.alumnus));
        }
      });
  }
  goToUpdateTeacher(teacherId: string, alumnusId:string) {
    this.alumnusStore.setEntityActive(alumnusId);
    this.teacherStore.setEntityActive(teacherId);
    this.router.navigate([
      '/admin-dashboard-layout/management-shell/profile-teacher',
    ]);
  }
  onDeleteTeacher(alumnusId: string, id:string) {
    this.teacherService
      .deleteTeacher(alumnusId, id)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(()=>{

      });
  }

  loadTeachers() {
    this.teachers$ = this.teacherQuery.selectAll$.pipe(
      tap((teachers) => {

        // console.log('Query', teachers);
      })
    );
  }

  nextPage(): void {
    if (this.teacherslength === this.pageSize) {
      this.pageNumber++;
      this.searchBarStore.setSearchParams(this.currentResult);
    }
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.searchBarStore.setSearchParams(this.currentResult);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.subs.unsubscribe();
  }
}
