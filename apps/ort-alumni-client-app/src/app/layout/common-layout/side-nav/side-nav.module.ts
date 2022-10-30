import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';
import { QuicklinkModule } from 'ngx-quicklink';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule, QuicklinkModule, UiButtonModule],
  exports: [QuicklinkModule, SideNavComponent],
})
export class SideNavModule {}
