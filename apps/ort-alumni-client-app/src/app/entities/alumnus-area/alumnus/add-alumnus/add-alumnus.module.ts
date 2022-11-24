import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
import { FeatureFormModule } from '@features/feature-form';
import { AddAlumnusComponent } from './add-alumnus.component';

@NgModule({
  declarations: [AddAlumnusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AddAlumnusComponent }
    ]),
    FeatureExpansionPanelModule,
    FeatureFormModule
  ],
  exports: [AddAlumnusComponent]
})
export class AddAlumnusModule {}
