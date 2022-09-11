import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiButtonModule } from '@ui-components/ui-button';
import { ShowIfLoggedInDirectiveModule } from '../../../auth/session/show-if-logged-in.directive';
import { FeatureModalModule } from '@features/feature-modal';


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
  exports: [QuicklinkModule, NavBarComponent ],
})
export class NavBarModule {}
