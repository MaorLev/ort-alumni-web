import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SessionQuery } from 'apps/ort-alumni-client-app/src/app/auth/session/state/session.query';
import { TeacherModel } from '../state-teacher/teacher-model';

export enum ModeStudyEnum {
  frontally = '1',
  online = '2',
}

export const ModeStudyMap: Record<number, string> = {
  [ModeStudyEnum.frontally]: 'פרונטלי',
  [ModeStudyEnum.online]: 'אונליין',
};

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherDetailComponent implements OnInit {
  @Input() details: any;
  modeStudyMap = ModeStudyMap;
  image: SafeUrl;
  name:string;

  constructor(private sanitizer: DomSanitizer, private sessionQuary:SessionQuery) {}
  ngOnInit(): void {
    this.onGetImageSrc();
    this.name = this.sessionQuary.getName();
  }

  onGetImageSrc(): void {
    if(!!this.details && !!this.details.logo && !!this.details.logo.bytes)
    {
      const logoDetail = this.details.logo;
      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/${logoDetail.fileExtension};base64,${logoDetail.bytes}`
      );
    }
  }
}
