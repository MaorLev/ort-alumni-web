import { Observable } from "rxjs";
import { CourseByStudyProgramInterface } from "../../../../../entities/static-entities-backend-data/static-entities-interfaces/course-by-studyprogram.interface";
import { VaFormInputInterface } from "@utils/core/global-interfaces";
import { Validators } from "@angular/forms";
import { TeacherControls } from "../../../../../entities/alumnus-area/teacher/configs-teacher/teacher-controls";
import { StudyProgramInterface } from "apps/ort-alumni-client-app/src/app/entities/static-entities-backend-data/static-entities-interfaces/study-program.interface";

export class SearchBarTeacherControls extends TeacherControls {
  constructor() {
    super();
  }

  static studyprogram = (
    list: StudyProgramInterface[],isDisabled?: boolean
  ): VaFormInputInterface => {
    return this.selectInput({
      name: 'studyprogram',
      label: 'מגמה',
      type: '',
      placeholder: 'בחר מגמה',
      validators: [],
      data: {
        property: { value: undefined, disabled: isDisabled ? isDisabled : false },
        isMultiple: false,
        options: list ? list : [],
      },
      errors: [
        {
          name: 'required',
          message: 'שדה חובה',
        },
      ],
    });
  };


  static courses = (
    options?: Observable<CourseByStudyProgramInterface[]>
  ): VaFormInputInterface => {
    return this.selectInput({
      name: 'courses',
      label: 'קורסים',
      placeholder: 'בחר קורס/קורסים',
      styleClass: '',
      validators: [],
      data: {
        isMultiple: true,
        limitation: 4,
        options: options ? options : [],
      },
      errors: [],
    });
  };


}