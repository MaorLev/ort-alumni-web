import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PEmployerComponent } from './p-employer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PEmployerComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:PEmployerComponent}])],
  exports: [PEmployerComponent],
})
export class PEmployerModule {}
