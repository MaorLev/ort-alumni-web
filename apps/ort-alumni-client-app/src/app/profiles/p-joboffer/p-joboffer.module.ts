import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PJobofferComponent } from './p-joboffer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PJobofferComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:PJobofferComponent}])],
  exports: [PJobofferComponent],
})
export class PJobofferModule {}
