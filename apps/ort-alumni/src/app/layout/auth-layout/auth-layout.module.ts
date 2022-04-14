import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout.routing';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, AuthLayoutRoutingModule]
})
export class AuthLayoutModule {}
