import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherTabComponent } from './switcher-tab.component';

@NgModule({
  declarations: [SwitcherTabComponent],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
  ],
  exports: [ SwitcherTabComponent],
})
export class FeatureSwitcherTabModule {}
