import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FeatureExpansionPanelModule } from '@features/feature-expansion-panel';
@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }])
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
