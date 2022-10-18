import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnusRegisterationComponent } from './alumnus-registeration.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';

@NgModule({
  declarations: [AlumnusRegisterationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AlumnusRegisterationComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [AlumnusRegisterationComponent]
})
export class AlumnusRegisterationModule {}
