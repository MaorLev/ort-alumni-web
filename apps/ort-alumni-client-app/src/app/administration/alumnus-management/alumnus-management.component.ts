import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
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
import { AlumnusModel } from '../../entities/alumnus-area/alumnus/configs-alumnus/alumnus-model';
import {
  IPaginationByKeyFilter,
  PaginationKeyFilterInitialization,
} from '../admin-helpers/pagination-and-filters-configs';
import { FormControl } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { inputFilterByKeyDataConfig } from '../admin-helpers/input-filter-by-key.data';
import { AlumnusService } from '../../entities/alumnus-area/alumnus/state-alumnus/alumnus.service';
import { AlumnusStore } from '../../entities/alumnus-area/alumnus/state-alumnus/alumnus.store';
import { AlumnusQuery } from '../../entities/alumnus-area/alumnus/state-alumnus/alumnus.query';
import { Router } from '@angular/router';
import { TeacherStore } from '../../entities/alumnus-area/teacher/state-teacher/teacher.store';

@Component({
  selector: 'app-alumnus-management',
  templateUrl: './alumnus-management.component.html',
  styleUrls: ['./alumnus-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlumnusManagementComponent implements OnInit, OnDestroy {
  alumni$: Observable<AlumnusModel[] | undefined>;
  searchRequest: IPaginationByKeyFilter;
  headers: string[];
  keyControl: FormControl = new FormControl();
  onDestroy$: Subject<void>;
  keyConfig: VaFormInputInterface = inputFilterByKeyDataConfig;
  constructor(
    private alumnusService: AlumnusService,
    private alumnusStore: AlumnusStore,
    private alumnusQuery: AlumnusQuery,
    private router: Router,
    private teacherStore: TeacherStore
  ) {
    this.onDestroy$ = new Subject();
    this.searchRequest = { ...PaginationKeyFilterInitialization };
    this.headers = [
      'מזהה',
      'אימייל',
      'שם',
      'טלפון',
      'ת"ז',
      'עריכה/הוספה מורה',
      'עריכה בוגר',
      'מחיקה בוגר',
    ];
  }

  ngOnInit(): void {
    this.onSearchByKey();

    this.loadAlumni();
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
          return this.alumnusService.searchAlumniByKeyAndLoad(
            this.searchRequest
          );
        })
      )
      .subscribe();
  }

  loadAlumni() {
    this.alumni$ = this.alumnusQuery.selectAlumni$.pipe(
      tap((alumni) => {
        // console.log('Query', alumni);
      })
    );
  }

  goToUpdateTeacher(teacherId: string, alumnusId:string) {
    this.alumnusStore.setEntityActive(alumnusId);
    this.teacherStore.setEntityActive(teacherId);
    this.router.navigate([
      '/admin-dashboard-layout/management-shell/profile-teacher',
    ]);
  }
  goToCreateTeacher(alumnusId: string) {
    this.alumnusStore.setEntityActive(alumnusId);
    this.router.navigate([
      '/admin-dashboard-layout/management-shell/register-teacher',
    ]);
  }
  goToUpdateAlumnus(alumnusId: string) {
    this.alumnusStore.setEntityActive(alumnusId);
    this.router.navigate([
      '/admin-dashboard-layout/management-shell/profile-alumnus',
    ]);
  }
  onDeleteAlumnus(alumnusId: string) {
    this.alumnusService
      .deleteAlumnus(alumnusId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
