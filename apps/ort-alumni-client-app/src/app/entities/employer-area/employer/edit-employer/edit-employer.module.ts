import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEmployerComponent } from './edit-employer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditEmployerComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:EditEmployerComponent}])],
  exports: [EditEmployerComponent],
})
export class EditEmployerModule {}
