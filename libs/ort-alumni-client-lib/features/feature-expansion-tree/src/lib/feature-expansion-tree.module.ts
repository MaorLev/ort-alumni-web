import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpansionTreeComponent } from './feature-expansion-tree.component';
import { RouterModule } from '@angular/router';
// import { QuicklinkModule } from 'ngx-quicklink';
import { UiIconModule } from '@ui-components/ui-icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    //  ,QuicklinkModule,
    UiIconModule,
  ],
  declarations: [FeatureExpansionTreeComponent],
  exports: [
    FeatureExpansionTreeComponent,
    //  QuicklinkModule
  ],
})
export class FeatureExpansionTreeModule {}
