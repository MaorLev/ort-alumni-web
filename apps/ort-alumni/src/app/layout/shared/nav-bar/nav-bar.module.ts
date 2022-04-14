import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, QuicklinkModule, RouterModule],
  exports: [NavBarComponent, QuicklinkModule]
})
export class NavBarModule {}
