import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureNavigationComponent } from './feature-navigation.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiButtonModule } from '@ui-components/ui-button';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [FeatureNavigationComponent],
  imports: [CommonModule, RouterModule, QuicklinkModule, UiButtonModule, MatExpansionModule],
  exports: [FeatureNavigationComponent],
})
export class FeatureNavigationModule {}
