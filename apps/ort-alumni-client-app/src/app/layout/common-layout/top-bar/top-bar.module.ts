import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { UiIconModule } from '@ui-components/ui-icon';
import { ShowIfLoggedInDirectiveModule } from '../../../auth/session/show-if-logged-in.directive';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    QuicklinkModule,
    CommonModule,
    UiIconModule,
    ShowIfLoggedInDirectiveModule,
    RouterModule,
  ],
  exports: [QuicklinkModule, TopBarComponent],
})
export class TopBarModule {}
