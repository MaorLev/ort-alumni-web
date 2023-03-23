import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnusDetailComponent } from './alumnus-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlumnusDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AlumnusDetailComponent }]),
  ],
  exports: [AlumnusDetailComponent],
})
export class AlumnusDetailModule {}
