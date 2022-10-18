import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRegisterationComponent } from './employer-registeration.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [EmployerRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EmployerRegisterationComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [EmployerRegisterationComponent]
})
export class EmployerRegisterationModule {}
