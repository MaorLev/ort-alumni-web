
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherTabComponent } from './switcher-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [SwitcherTabComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [QuicklinkModule, SwitcherTabComponent ],
})
export class SwitcherTabModule {}
