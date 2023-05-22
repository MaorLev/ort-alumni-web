import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SearchBarTeacherQuery } from '../teaching-portal-features/search-bar-teacher/state/search-bar-teacher.query';
import { Observable, Subscription, of, switchMap } from 'rxjs';
import { TeacherModel } from '../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
import { TeacherService } from '../../../entities/alumnus-area/teacher/state-teacher/teacher.service';
import { TeacherQuery } from '../../../entities/alumnus-area/teacher/state-teacher/teacher.query';
import { ModeStudyMap } from '../../../entities/static-entities-backend-data/static-entities-interfaces/mode-study.interface';
import { SearchBarTeacherModel } from '../teaching-portal-features/search-bar-teacher/state/search-bar-teacher.model';
import { cloneDeep } from '@utils/util-tools';
import { SearchBarTeacherStore } from '../teaching-portal-features/search-bar-teacher/state/search-bar-teacher.store';

@Component({
  selector: 'app-teacher-results',
  templateUrl: './teacher-results.component.html',
  styleUrls: ['./teacher-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherResultsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isTeacherLoaded$: Observable<boolean | undefined>;

  onlineTeachers: TeacherModel[];
  frontallyTeachers: TeacherModel[];
  bothModeTeachers: TeacherModel[];
  teacherslength: number;
  currentResult: SearchBarTeacherModel;

  pageNumber:number;
  readonly pageSize:number;

  get modeStudyMap() {
    return ModeStudyMap;
  }
  
  constructor(
    private searchBarQuery: SearchBarTeacherQuery,
    private searchBarStore: SearchBarTeacherStore,
    private teacherService: TeacherService,
    private teacherQuery: TeacherQuery
  ) {
    this.subscription = new Subscription();
    this.teacherslength = 0;
    this.onlineTeachers = [];
    this.frontallyTeachers = [];
    this.bothModeTeachers = [];
    this.pageNumber = 1;
    this.pageSize = 8;
    this.currentResult = {} as SearchBarTeacherModel;
  }

  ngOnInit(): void {
    this.isTeacherLoaded$ = this.teacherQuery.isTeacherLoaded$;
    this.searchBarQuery.result$
      .pipe(
        switchMap((result) => {
          if (result) {
            this.currentResult = cloneDeep(result);
            return this.teacherService.searchAndLoadTeachers(this.pageNumber, this.pageSize, this.currentResult);
          }
          return of(undefined);
        })
      )
      .subscribe((teachers) => {

        if (teachers) {
          this.applyTeachersByModeStudies(teachers);
        }
      });
  }

  nextPage(): void {
    if(this.teacherslength === this.pageSize)
    {
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

  private applyTeachersByModeStudies(teachers: TeacherModel[]): void {
    this.teacherslength = teachers.length;
    this.onlineTeachers = [];
    this.frontallyTeachers = [];
    this.bothModeTeachers = [];
    teachers.forEach((teacher) => {
      if (teacher.modestudyids) {
        if (teacher.modestudyids.length === 2)
          this.bothModeTeachers = [...this.bothModeTeachers, teacher];
        else if (this.modeStudyMap[teacher.modestudyids[0]] === 'אונליין')
          this.onlineTeachers = [...this.onlineTeachers, teacher];
        else this.frontallyTeachers = [...this.frontallyTeachers, teacher];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.teacherService.clearState();
  }
}
