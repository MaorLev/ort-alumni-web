import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiIconModule } from '@ui-components/ui-icon';
import { RouterModule } from '@angular/router';
import { FeatureModalModule } from '@features/feature-modal';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, QuicklinkModule, UiIconModule, FeatureModalModule],
  exports: [QuicklinkModule, FooterComponent],
})
export class FooterModule {}
