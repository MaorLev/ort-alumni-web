import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { ButtonModule, ImgModule } from '@shared/ui';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShowIfLoggedInDirectiveModule } from '@ort-alumni/auth';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule,
    ButtonModule,
    ImgModule,
    MatIconModule,
    MatToolbarModule,
    ShowIfLoggedInDirectiveModule
  ],
  exports: [QuicklinkModule, NavBarComponent ],
})
export class NavBarModule {}
