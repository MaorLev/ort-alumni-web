import { CityInterface } from "../../../student/state-student/student.model";



export interface TeacherModel {
  id?: number;
  mailforstudy: string;
  logo: string;
  rate: string;
  description: string;
  alumnusid: number;
  languages: LanguageInterface [];
  courseids: number[];
  // coursenames:string [];
  cities: CityInterface[];
  modestudyids: number[];
  // languagenames:string [];
  // frontally_names:string [];
  // is_online:boolean;
  // is_frontally:boolean;
}

export interface LanguageInterface {
  id: number;
  name: string;
}
