// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application Specific Modules
import { LayoutTeachingPortalComponent } from './layout-teaching-portal.component';
import { LayoutTeachingPortalRoutingModule } from './layout-teaching-portal.routing';

// Layout Modules
import { FooterModule } from '../common-layout/footer/footer.module';
import { HeaderModule } from '../common-layout/header/header.module';
import { TopBarModule } from './../common-layout/top-bar/top-bar.module';
import { HeroModule } from '../../layout/common-layout/hero/hero.module';
// Entity Modules
import { TeacherModule } from '../../entities/alumnus-area/teacher/teacher.module';

// Feature Modules
import { IntroCardTeacherModule } from '../../pages/teaching-portal-area/teaching-portal-features/intro-card-teacher/intro-card-teacher.module';
import { SearchBarTeacherModule } from '../../pages/teaching-portal-area/teaching-portal-features/search-bar-teacher/search-bar-teacher.module';
import { NavBarModule } from '../common-layout/nav-bar/nav-bar.module';

// Third-party Modules
// import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [LayoutTeachingPortalComponent],
  imports: [
    CommonModule,
    // QuicklinkModule,
    RouterModule,
    LayoutTeachingPortalRoutingModule,
    TopBarModule,
    FooterModule,
    HeaderModule,
    SearchBarTeacherModule,
    IntroCardTeacherModule,
    TeacherModule,
    HeroModule,
    NavBarModule
  ]
})
export class LayoutTeachingPortalModule {}
