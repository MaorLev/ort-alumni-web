import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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

@Component({
  selector: 'app-teacher-registeration',
  templateUrl: './teacher-registeration.component.html',
  styleUrls: ['./teacher-registeration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeacherRegisterationComponent implements OnInit {
  alumnusId: string;
  @ViewChild('panel') panel: FeatureExpansionPanelComponent;
  isSubmitted: boolean;
  constructor(
    public teacherFormConfig: TeacherFormConfig,
    private changeDetectorRef: ChangeDetectorRef,
    private teacherService: TeacherDataService,
    private sessionQuery: SessionQuery,
    private alertService: AlertsService
  ) {}
  ngOnInit(): void {
    this.alumnusId = this.sessionQuery.getUserId();
    this.isSubmitted = false;
  }

  onSubmitted(group: FormGroup): void {
    debugger;
    console.log(group.value);

    if (this.alumnusId && !this.isSubmitted)
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
          this.panel.state.actions$.next({ type: PanelActionType.nextStep });
          this.panel.state.actions$.next({ type: PanelActionType.ExcludeStep });

          this.switchFormToImageMode(group);
        });
    else {
      debugger;
      this.teacherService.getTeachers();
    }
  }

  switchFormToImageMode(group: FormGroup) {
    this.isSubmitted = true;
    group.disable();
    group.controls['image'].enable();
  }
}
