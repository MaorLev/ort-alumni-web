import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureExpansionPanelComponent } from '@features/feature-expansion-panel';
import { catchError } from 'rxjs';
import { StudentDataService } from './state/student.data.service';
import { StudentInterface } from './state/student.model';
import { StudentFormConfig } from './student-form.config';

@Component({
  selector: 'app-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrls: ['./student-registeration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentRegisterationComponent implements OnInit {
  submitMode: 'success' | 'failed' | 'undefined' = 'undefined';
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public studentFormConfig: StudentFormConfig,
    private studentService: StudentDataService
  ) {}

  ngOnInit(): void {}

  onSubmitted(group: FormGroup): void {
    console.log(group.value);
    this.studentService.createStudent(group.value).pipe(catchError((error:any) => {
      this.submitMode = 'failed';
      this.changeDetectorRef.detectChanges();
      return error;
    })).subscribe((res) => {
      debugger;
      this.submitMode = 'success';
      this.changeDetectorRef.detectChanges();
    });
  }
}
