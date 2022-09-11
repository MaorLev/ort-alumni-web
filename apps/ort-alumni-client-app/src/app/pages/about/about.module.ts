import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, MatGridListModule, RouterModule.forChild([{path:'', component:AboutComponent}])],
  exports: [AboutComponent],
})
export class AboutModule {}
