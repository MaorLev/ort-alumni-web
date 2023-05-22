import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionQuery } from '../../../../auth/session/state/session.query';
import { Observable } from 'rxjs';
import { TeacherModel } from '../configs-teacher/teacher-model';
import { TeacherQuery } from '../state-teacher/teacher.query';
import { ModeStudyMap } from '../../../static-entities-backend-data/static-entities-interfaces/mode-study.interface';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherDetailComponent implements OnInit {
  teacherModel: any;
  teacherModel$: Observable<TeacherModel | undefined>;
  modeStudyMap = ModeStudyMap;
  image: SafeUrl;
  name: string;

  constructor(
    public teacherQuery: TeacherQuery,
    private sanitizer: DomSanitizer,
    private sessionQuary: SessionQuery
  ) {}
  ngOnInit(): void {
    this.teacherModel$ = this.teacherQuery.selectActiveTeacher$;
    this.teacherModel = this.teacherQuery.getActiveTeacher();
    this.onGetImageSrc();
    this.name = this.sessionQuary.getName();
  }

  onGetImageSrc(): void {
    if (
      !!this.teacherModel &&
      !!this.teacherModel.logo &&
      !!this.teacherModel.logo.bytes
    ) {
      const logoDetail = this.teacherModel.logo;
      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/${logoDetail.fileExtension};base64,${logoDetail.bytes}`
      );
    }
  }
}
