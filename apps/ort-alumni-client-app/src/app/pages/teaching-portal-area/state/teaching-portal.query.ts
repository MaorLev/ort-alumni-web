import { Injectable } from '@angular/core';
import { TeachingPortalModel, TeachingPortalState } from './teaching-portal.types';
import { Query } from '@datorama/akita';
import { TeachingPortalStore } from './teaching-portal.store';
import { Observable, map } from 'rxjs';
import { RouteNavigationType } from '@features/feature-navigation';
import { CategoryInterface } from '../../article/state/category.interface';
import { TeacherModel } from '../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';

@Injectable()
export class TeacherPortalQuery extends Query<TeachingPortalState> {
  isLoggedIn$ = this.select((state) => state.loading);

  constructor(
    protected override store: TeachingPortalStore
  ) {
    super(store);
  }

  selectVM$: Observable<TeachingPortalModel | undefined> = this.select((state) => state.VMTeachingPortal);

  selectInvitationLinks$: Observable<RouteNavigationType[] | undefined> = this.selectVM$.pipe(
    map((vm) => vm?.invitatationLinks)
  );
  selectEducationArticles$: Observable<CategoryInterface | undefined> = this.selectVM$.pipe(
    map((vm) => vm?.educationArticles)
  );
  selectAlumnusTeachers$: Observable<TeacherModel [] | undefined> = this.selectVM$.pipe(
    map((vm) => vm?.alumnusTeachers)
  );

}
