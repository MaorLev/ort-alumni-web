// import { ActiveState, EntityState } from "@datorama/akita";
// import { cloneDeep, StorageService } from "@utils/util-tools";

export interface CityInterface {
  id:number;
  name:string;
}
export interface CollegeInterface {
  id:number;
  name:string;
}
export interface StudyProgramInterface {
  id:number;
  name:string;
}
// export interface StudentsState extends EntityState<StudentInterface, number>, ActiveState {
//   areStudentsLoaded: boolean;
// }


export interface StudentInterface {
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

// export function createInitialStateStudent(): StudentsState {
//   const studentStorage:StorageService = new StorageService('studentState');
//   const authStorage:StorageService = new StorageService('authStorage');
//   const authSession = authStorage.getSession();

//   return {
//     areStudentsLoaded: false,
//     entities: studentStorage.getSession(),
//     active: authSession ? authSession.id : null
//   };
// }
