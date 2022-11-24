import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { AddAdminComponent } from './add-admin.component';

@NgModule({
  declarations: [AddAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddAdminComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule,
  ],
  exports: [AddAdminComponent],
})
export class AddAdminModule {}
