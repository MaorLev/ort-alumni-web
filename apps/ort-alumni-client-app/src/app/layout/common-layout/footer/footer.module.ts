import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { UiIconModule } from '@ui-components/ui-icon';
import { RouterModule } from '@angular/router';
import { FeatureModalModule } from '@features/feature-modal';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiIconModule,
    FeatureModalModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
