import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { TopBarComponent } from './top-bar.component';
import { UiIconModule } from '@ui-components/ui-icon';
import { ShowIfLoggedInDirectiveModule } from '../../../auth/session/show-if-logged-in.directive';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    RouterModule,
    QuicklinkModule,
    CommonModule,
    UiIconModule,
    ShowIfLoggedInDirectiveModule,
  ],
  exports: [ TopBarComponent],
})
export class TopBarModule {}
