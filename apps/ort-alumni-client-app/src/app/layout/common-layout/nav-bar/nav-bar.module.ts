import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiImgModule } from '@ui-components/ui-img';
import { UiButtonModule } from '@ui-components/ui-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShowIfLoggedInDirectiveModule } from '../../../auth/session/show-if-logged-in.directive';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule,
    UiButtonModule,
    UiImgModule,
    MatIconModule,
    MatToolbarModule,
    ShowIfLoggedInDirectiveModule
  ],
  exports: [QuicklinkModule, NavBarComponent ],
})
export class NavBarModule {}
