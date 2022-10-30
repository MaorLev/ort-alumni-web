import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAlumnusComponent } from './p-alumnus.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PAlumnusComponent],
  imports: [CommonModule, RouterModule.forChild([{path:"", component:PAlumnusComponent}])],
  exports: [PAlumnusComponent],
})
export class PAlumnusModule {}
