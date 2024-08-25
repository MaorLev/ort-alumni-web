import { CityInterface } from "../../../static-entities-backend-data/static-entities-interfaces/city.Interface";
import { CollegeInterface } from "../../../static-entities-backend-data/static-entities-interfaces/college.interface";
import { StudyProgramInterface } from "../../../static-entities-backend-data/static-entities-interfaces/study-program.interface";
import { TeacherModel } from "../../teacher/configs-teacher/teacher-model";


export interface AlumnusModel {
  id: string;
  email : string;
  firstname : string;
  lastname : string;
  password : string;
  phone : string;
  cardid : string;
  dateofbirth : Date;
  city : CityInterface;
  studystartyear : string;
  studyfinishyear : string;
  college : CollegeInterface;
  studyprogram : StudyProgramInterface;
  teacher:TeacherModel;
  teacherid:number;
}