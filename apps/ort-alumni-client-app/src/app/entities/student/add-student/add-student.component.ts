import {
  Component,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureExpansionPanelComponent, PanelActionType } from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError } from 'rxjs';
import { StudentDataService } from '../state-student/student.data.service';
import { StudentPanelDataConfig } from '../configs-student/student-panel-data.config';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStudentComponent {

  @ViewChild('panel') panel:FeatureExpansionPanelComponent;
  constructor(
    public studentFormConfig: StudentPanelDataConfig,
    private studentService: StudentDataService,
    private alertService:AlertsService

  ) {}

  onSubmitted(group: FormGroup): void {
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
