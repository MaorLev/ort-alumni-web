import { CityInterface } from "../../../student/state-student/student.model";

export interface LogoInterface {
  bytes: any;
  description?: string;
  fileExtension: string;
  size: number;
}

export interface TeacherModel {
  id?: number;
  mailforstudy: string;
  logo: LogoInterface | null;//ddd
  rate: string;
  description: string;
  alumnusid: number;//ddd
  languages: LanguageInterface [];
  courseids: number[];//ddd
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


