import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './feature-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureTableComponent],
  exports: [FeatureTableComponent],
})
export class FeatureTableModule {}
