import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

import { ShowIfLoggedInDirectiveModule } from '../../../auth/session/show-if-logged-in.directive';
import { FeatureModalModule } from '@features/feature-modal';
import { UiButtonModule } from '@ui-components/ui-button';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    UiButtonModule,
    ShowIfLoggedInDirectiveModule,
    FeatureModalModule

  ],
  exports: [
     NavBarComponent ],
})
export class NavBarModule {}
