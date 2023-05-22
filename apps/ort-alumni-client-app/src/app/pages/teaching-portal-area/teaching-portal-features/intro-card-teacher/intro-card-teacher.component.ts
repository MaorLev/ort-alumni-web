import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TeacherModel } from '../../../../entities/alumnus-area/teacher/configs-teacher/teacher-model';
import { ModeStudyMap } from '../../../../entities/static-entities-backend-data/static-entities-interfaces/mode-study.interface';
import { ModalInteface, TEACHER_CONTACT_MODAL_DATA } from '@features/feature-modal';

@Component({
  selector: 'app-intro-card-teacher',
  templateUrl: './intro-card-teacher.component.html',
  styleUrls: ['./intro-card-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroCardTeacherComponent implements OnInit {
  @Input() teacher: TeacherModel;
  modeStudyMap = ModeStudyMap;
  modeStudies: string[];
  contactConfig: ModalInteface;
  constructor() {
    this.modeStudies = [];
    this.contactConfig = TEACHER_CONTACT_MODAL_DATA;
  }

  ngOnInit(): void {
    if (this.teacher.modestudyids) {
      this.teacher.modestudyids.forEach((element) => {
        this.modeStudies.push(this.modeStudyMap[element]);
      });
    }
  }
}
