
import { CityInterface } from "../../../../../entities/static-entities-backend-data/static-entities-interfaces/city.Interface";
import { CourseByStudyProgramInterface } from "../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface";
import { ModeStudyInterface as int } from "../../../../../entities/static-entities-backend-data/static-entities-interfaces/mode-study.interface";
import { StudyProgramInterface } from "../../../../../entities/static-entities-backend-data/static-entities-interfaces/study-program.interface";

export interface SearchBarTeacherModel {
  studyprogram: StudyProgramInterface;
  modestudyids: int[];
  cities: CityInterface[];
  courses: CourseByStudyProgramInterface [];
}