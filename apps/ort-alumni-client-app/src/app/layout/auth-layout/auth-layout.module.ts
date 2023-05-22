// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Application Specific Modules
import { AuthLayoutComponent } from './auth-layout.component';
import { AuthLayoutRoutingModule } from './auth-layout.routing';

// Layout Modules
import { HeaderModule } from '../common-layout/header/header.module';
import { TopBarModule } from '../common-layout/top-bar/top-bar.module';

// Third-party Modules
// import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AuthLayoutRoutingModule,
    // QuicklinkModule,
    TopBarModule,
  ]
})
export class AuthLayoutModule {}
