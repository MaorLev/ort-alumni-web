
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSwitcherComponent } from './auth-switcher.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { RouterModule } from '@angular/router';
import { SwitcherTabModule } from '@shared/feature';
@NgModule({
  declarations: [AuthSwitcherComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forChild([{ path: '', component: AuthSwitcherComponent }]),
    SwitcherTabModule
  ],
  exports: [QuicklinkModule, AuthSwitcherComponent],
})
export class AuthSwitcherModule {}
