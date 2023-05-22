
import { RouteNavigationType } from '@features/feature-navigation';
import { CategoryInterface } from '../../article/state/category.interface';
import { TeacherModel } from '../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';


export interface TeachingPortalModel {
  invitatationLinks: RouteNavigationType[];
  educationArticles: CategoryInterface;
  alumnusTeachers: TeacherModel[];
}
export interface TeachingPortalState {
  VMTeachingPortal: TeachingPortalModel | undefined;
  loading: boolean;
}
