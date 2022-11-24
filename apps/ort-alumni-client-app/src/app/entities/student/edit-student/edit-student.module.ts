import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditStudentComponent } from './edit-student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditStudentComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:EditStudentComponent}])],
  exports: [EditStudentComponent],
})
export class EditStudentModule {}
