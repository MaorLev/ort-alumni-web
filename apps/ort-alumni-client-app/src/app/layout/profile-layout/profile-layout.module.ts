// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Application Specific Modules
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutingModule } from './profile-layout.routing';

// Layout Modules
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';
import { HeaderModule } from '../common-layout/header/header.module';
import { TopBarModule } from '../common-layout/top-bar/top-bar.module';

// Feature Modules
import { FeatureNavigationModule } from '@features/feature-navigation';

@NgModule({
  declarations: [ProfileLayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    NavBarModule,
    FeatureNavigationModule,
    ProfileLayoutRoutingModule,
    TopBarModule,
  ],
})
export class ProfileLayoutModule {}
