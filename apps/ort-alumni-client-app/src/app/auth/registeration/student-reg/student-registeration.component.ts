import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MessageType
} from '@utils/util/core/central-message';

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
  submitMode: 'success' | 'failed' | 'undefined' = 'undefined';
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public studentFormConfig: StudentFormConfig,
    private studentService: StudentDataService,

  ) {}

  onSubmitted(group: FormGroup): void {
    console.log(group.value);
    this.studentService
    .createStudent(group.value)
      .pipe(
        catchError((error: any) => {
          this.submitMode = 'failed';
          this.changeDetectorRef.detectChanges();
          return error;
        })
      )
      .subscribe((res) => {
        this.submitMode = 'success';
        this.changeDetectorRef.detectChanges();
      });
  }
}
