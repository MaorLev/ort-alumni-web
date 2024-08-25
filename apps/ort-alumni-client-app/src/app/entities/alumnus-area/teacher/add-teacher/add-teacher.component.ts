import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FeatureExpansionPanelComponent,
  PanelActionType,
} from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
import { TeacherPanelDataConfig } from '../configs-teacher/teacher-panel-data.config';
import { HttpEventType } from '@angular/common/http';
import { SessionQuery } from '../../../../auth/session/state/session.query';
import { TeacherService } from '../state-teacher/teacher.service';
import { TeacherQuery } from '../state-teacher/teacher.query';
import { TeacherModel } from '../configs-teacher/teacher-model';
import { AlumnusQuery } from '../../alumnus/state-alumnus/alumnus.query';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTeacherComponent implements OnInit {
  alumnusId: string | undefined;
  @ViewChild('mainForm') form1: FeatureExpansionPanelComponent;
  @ViewChild('logoForm') form2: FeatureExpansionPanelComponent;
  isMainFormSubmitted: boolean;
  constructor(
    public teacherFormConfig: TeacherPanelDataConfig,
    private teacherService: TeacherService,
    private sessionQuery: SessionQuery,
    private alertService: AlertsService,
    private teacherQuery: TeacherQuery,
    private alumnusQuery: AlumnusQuery,
  ) {}
  ngOnInit(): void {
    this.alumnusId = this.teacherQuery.getAlumnusIdByActiveTeacher() || this.alumnusQuery?.getActiveAlumnusId() as string || this.sessionQuery.getUserId();
    this.isMainFormSubmitted = false;
  }

  onSubmitted(group: FormGroup): void {
    if (this.alumnusId && !this.isMainFormSubmitted)
      this.teacherService
        .createTeacher(group.value, this.alumnusId)
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
      const imageControlValue = group.controls['logo'];
      if (imageControlValue && !!imageControlValue.value)
        this.teacherService
          .AddLogo(
            imageControlValue.value,
            this.alumnusId as string,
            this.teacherQuery.getActiveTeacher() as TeacherModel
          )
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
              this.form2.state.actions$.next({
                type: PanelActionType.nextStep,
              });
              this.form2.state.actions$.next({
                type: PanelActionType.ExcludeStep,
              });
            }
          });
      else
        this.form2.state.actions$.next({
          type: PanelActionType.nextStep,
        });
    }
  }
}
