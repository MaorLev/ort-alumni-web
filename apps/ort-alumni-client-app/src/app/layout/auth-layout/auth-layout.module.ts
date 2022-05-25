import { NavBarModule } from '@ort-alumni/feature';
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout.routing';
import { CommonModule } from '@angular/common';
import { FooterModule } from '@ort-alumni/feature';
import { HeaderModule } from '@ort-alumni/feature';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    AuthLayoutRoutingModule,
    NavBarModule,
  ],
})
export class AuthLayoutModule {}
