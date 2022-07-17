import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  imports: [CommonModule, MatProgressBarModule],
  declarations: [ProgressComponent],
  exports: [ProgressComponent],
})
export class ProgressModule {}
