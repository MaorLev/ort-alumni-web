import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpandHeaderPanelComponent } from './feature-expand-header-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [FeatureExpandHeaderPanelComponent],
  imports: [CommonModule, MatExpansionModule,MatButtonModule, MatIconModule],
  exports: [FeatureExpandHeaderPanelComponent],
})
export class FeatureExpandHeaderPanelModule {}
