import { ILogo } from "@ui-components/ui-material-card";
import { CityInterface } from "../../../static-entities-backend-data/static-entities-interfaces/city.Interface";
import { CourseByStudyProgramInterface } from "../../../static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface";
import { LanguageInterface } from "../../../static-entities-backend-data/static-entities-interfaces/language.interface";
import { AlumnusModel } from "../../alumnus/configs-alumnus/alumnus-model";


export interface LogoInterface extends ILogo{
  bytes: any;
  description?: string;
  fileExtension: string;
  size: number;
}

export interface TeacherModel {
  id: string;
  mailforstudy: string;
  logo: LogoInterface | null;
  rate: string;
  description: string;
  alumnusid: string;
  languages: LanguageInterface[];
  courses: CourseByStudyProgramInterface[];
  cities: CityInterface[];
  modestudyids: number[];
  alumnus:AlumnusModel

}
