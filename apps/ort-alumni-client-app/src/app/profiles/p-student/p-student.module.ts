import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PStudentComponent } from './p-student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PStudentComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:PStudentComponent}])],
  exports: [PStudentComponent],
})
export class PStudentModule {}
