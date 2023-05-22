import { EntityState } from "@datorama/akita";
import { CityInterface } from "./static-entities-interfaces/city.Interface";
import { CollegeInterface } from "./static-entities-interfaces/college.interface";
import { StudyProgramInterface } from "./static-entities-interfaces/study-program.interface";
import { LanguageInterface } from "./static-entities-interfaces/language.interface";
import { CategoryInterface } from "../../pages/article/state/category.interface";
import { CourseByStudyProgramInterface } from "./static-entities-interfaces/course-by-studyprogram.interface";
import { ModeStudyInterface } from "./static-entities-interfaces/mode-study.interface";

export interface StaticEntitiesDataState extends EntityState<any> {
  cities: CityInterface[];
  colleges: CollegeInterface[];
  studyPrograms: StudyProgramInterface[];
  languages: LanguageInterface[];
  categories: CategoryInterface[];
  courses: CourseByStudyProgramInterface[];
  modeStudies:ModeStudyInterface [];
}