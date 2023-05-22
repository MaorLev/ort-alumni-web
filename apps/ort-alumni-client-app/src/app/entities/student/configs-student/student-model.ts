import { CityInterface } from "../../static-entities-backend-data/static-entities-interfaces/city.Interface";
import { CollegeInterface } from "../../static-entities-backend-data/static-entities-interfaces/college.interface";
import { StudyProgramInterface } from "../../static-entities-backend-data/static-entities-interfaces/study-program.interface";


export interface StudentModel {
  id: string;
  email : string;
  firstname : string;
  lastname : string;
  password : string;
  phone : string;
  cardid : string;
  dateofbirth : Date;
  studystartyear : string;
  college : CollegeInterface;
  studyprogram : StudyProgramInterface;
  city : CityInterface;
}
