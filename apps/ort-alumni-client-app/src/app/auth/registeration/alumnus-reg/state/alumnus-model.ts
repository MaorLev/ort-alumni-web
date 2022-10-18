import { CityInterface, CollegeInterface, StudyProgramInterface } from "../../student-reg/state/student.model";

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
}