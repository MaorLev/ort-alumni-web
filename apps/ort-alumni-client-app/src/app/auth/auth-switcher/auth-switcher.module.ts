
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSwitcherComponent } from './auth-switcher.component';

import { FeatureSwitcherTabModule } from '@features/feature-switcher-tab';
import { AuthSwitcherRoutingModule } from './auth-switcher.routing';

@NgModule({
  declarations: [AuthSwitcherComponent],
  imports: [
    CommonModule,
    AuthSwitcherRoutingModule,
    FeatureSwitcherTabModule
  ],
  exports: [AuthSwitcherComponent],
})
export class AuthSwitcherModule {}
