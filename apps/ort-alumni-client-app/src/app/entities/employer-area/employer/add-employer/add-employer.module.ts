import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployerComponent } from './add-employer.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [AddEmployerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddEmployerComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [AddEmployerComponent]
})
export class AddEmployerModule {}
