import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpansionPanelNodeComponent } from './feature-expansion-panel-node.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiIconModule } from '@ui-components/ui-icon';

@NgModule({
  imports: [CommonModule,RouterModule,QuicklinkModule, UiIconModule],
  declarations: [FeatureExpansionPanelNodeComponent],
  exports: [FeatureExpansionPanelNodeComponent,QuicklinkModule],
})
export class FeatureExpansionPanelNodeModule {}
