import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StudentService } from './state-student/student.service';
import { StudentStore } from './state-student/student.store';
import { StudentQuery } from './state-student/student.query';
import { AlertsService } from '@utils/util/core/central-message';
import { StudentDataService } from './state-student/student.data.service';


@NgModule({
  imports: [CommonModule],
  providers: [
    StudentService,
    StudentStore,
    StudentQuery,
    StudentDataService,
    AlertsService
  ],
})
export class StudentModule {}
