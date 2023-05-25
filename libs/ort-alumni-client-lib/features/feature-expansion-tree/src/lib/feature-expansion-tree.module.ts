import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpansionTreeComponent } from './feature-expansion-tree.component';
import { RouterModule } from '@angular/router';
import { UiIconModule } from '@ui-components/ui-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiIconModule,
  ],
  declarations: [FeatureExpansionTreeComponent],
  exports: [
    FeatureExpansionTreeComponent,
  ],
})
export class FeatureExpansionTreeModule {}
