import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { AdminRegisterationComponent } from './admin-registeration.component';

@NgModule({
  declarations: [AdminRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminRegisterationComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule,
  ],
  exports: [AdminRegisterationComponent],
})
export class AdminRegisterationModule {}
