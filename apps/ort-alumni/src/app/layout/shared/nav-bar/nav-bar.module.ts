import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { SharedUiButtonsModule } from '@shared/ui';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, QuicklinkModule, RouterModule, SharedUiButtonsModule],
  exports: [NavBarComponent, QuicklinkModule]
})
export class NavBarModule {}
