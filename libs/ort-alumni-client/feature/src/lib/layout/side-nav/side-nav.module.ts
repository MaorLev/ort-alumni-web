import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, QuicklinkModule],
  exports: [SideNavComponent, QuicklinkModule]
})
export class SideNavModule {}
