import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureExpansionPanelComponent, PanelActionType } from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError } from 'rxjs';
import { StudentDataService } from './state/student.data.service';

import { StudentFormConfig } from './student-form.config';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentRegisterationComponent {

  @ViewChild('panel') panel:FeatureExpansionPanelComponent;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public studentFormConfig: StudentFormConfig,
    private studentService: StudentDataService,
    private alertService:AlertsService

  ) {}

  onSubmitted(group: FormGroup): void {
    console.log(group.value);
    this.studentService
    .createStudent(group.value)
      .pipe(
        catchError((error: any) => {
          this.alertService.dynamicAlert('.שגיאת מערכת: משתמש לא התווסף, אנא נסה מאוחר יותר');
          return error;
        })
      )
      .subscribe(() => {
        this.panel.state.actions$.next({type:PanelActionType.nextStep});
        this.panel.state.actions$.next({type:PanelActionType.ExcludeStep});
      });
  }
}
