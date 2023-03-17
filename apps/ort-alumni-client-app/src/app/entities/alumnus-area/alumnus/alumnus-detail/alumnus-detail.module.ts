import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnusDetailComponent } from './alumnus-detail.component';
import { ReadableDatePipeModule } from '@utils/util-pipes';

@NgModule({
  declarations: [AlumnusDetailComponent],
  imports: [CommonModule, ReadableDatePipeModule],
  exports: [AlumnusDetailComponent],
})
export class AlumnusDetailModule {}
