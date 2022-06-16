
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSwitcherComponent } from './auth-switcher.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { FeatureSwitcherTabModule } from '@features/feature-switcher-tab';
import { AuthSwitcherRoutingModule } from './auth-switcher.routing';

@NgModule({
  declarations: [AuthSwitcherComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    AuthSwitcherRoutingModule,
    FeatureSwitcherTabModule
  ],
  exports: [QuicklinkModule, AuthSwitcherComponent],
})
export class AuthSwitcherModule {}
