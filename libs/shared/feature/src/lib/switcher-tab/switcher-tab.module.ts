import { MatButtonModule } from '@angular/material/button';
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
    RouterModule,
    MatTabsModule,
    MatIconModule,
    QuicklinkModule,
    MatButtonModule
  ],
  exports: [SwitcherTabComponent, QuicklinkModule],
})
export class SwitcherTabModule {}
