import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TeacherService } from './state-teacher/teacher.service';
import { TeacherStore } from './state-teacher/teacher.store';
import { TeacherQuery } from './state-teacher/teacher.query';
import { TeacherDataService } from './state-teacher/teacher-data.service';
import { AlertsService } from '@utils/util/core/central-message';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    TeacherService,
    TeacherStore,
    TeacherQuery,
    TeacherDataService,
    AlertsService
  ],
})
export class TeacherModule {}
