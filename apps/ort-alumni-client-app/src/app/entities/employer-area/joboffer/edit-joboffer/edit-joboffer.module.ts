import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditJobofferComponent } from './edit-joboffer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditJobofferComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:EditJobofferComponent}])],
  exports: [EditJobofferComponent],
})
export class EditJobofferModule {}
