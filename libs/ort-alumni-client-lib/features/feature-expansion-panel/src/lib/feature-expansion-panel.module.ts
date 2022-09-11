import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpansionPanelComponent } from './feature-expansion-panel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FeatureExpansionPanelComponent],
  exports: [FeatureExpansionPanelComponent],
})
export class FeatureExpansionPanelModule {}
