import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FeatureExpansionPanelComponent,
  PanelActionType
} from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
import { SessionQuery } from '../../session/state/session.query';
import { TeacherDataService } from './state/teacher-data.service';
import { TeacherFormConfig } from './teacher-form-config';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-teacher-registeration',
  templateUrl: './teacher-registeration.component.html',
  styleUrls: ['./teacher-registeration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherRegisterationComponent implements OnInit {
  alumnusId: string;
  @ViewChild('mainForm') form1: FeatureExpansionPanelComponent;
  @ViewChild('logoForm') form2: FeatureExpansionPanelComponent;
  isMainFormSubmitted: boolean;
  constructor(
    public teacherFormConfig: TeacherFormConfig,
    private teacherService: TeacherDataService,
    private sessionQuery: SessionQuery,
    private alertService: AlertsService
  ) {}
  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();
    this.isMainFormSubmitted = false;
  }

  onSubmitted(group: FormGroup): void {
    console.log(group.value);

    if (this.alumnusId && !this.isMainFormSubmitted)
      this.teacherService
        .createTeacher(group.value, parseInt(this.alumnusId))
        .pipe(
          catchError((error) => {
            this.alertService.dynamicAlert(
              '.שגיאת מערכת: משתמש לא התווסף, אנא נסה מאוחר יותר'
            );
            return error;
          })
        )
        .subscribe(() => {
          this.isMainFormSubmitted = true;
          this.form1.state.actions$.next({ type: PanelActionType.disabledAll });
          this.form2.state.actions$.next({ type: PanelActionType.waitingMode });
        });
    else if (this.isMainFormSubmitted) {
      this.teacherService
        .AddLogo(group.controls['image'].value, this.alumnusId)
        .pipe(
          catchError((error, caught) => {
            this.alertService.dynamicAlert(
              '.שגיאת מערכת: משתמש לא התווסף, אנא נסה מאוחר יותר'
            );
            return caught;
          })
        )
        .subscribe((event) => {
          if (event.type === HttpEventType.Response) {
            this.form2.state.actions$.next({ type: PanelActionType.nextStep });
            this.form2.state.actions$.next({
              type: PanelActionType.ExcludeStep
            });
          }
        });
    }
  }
}
