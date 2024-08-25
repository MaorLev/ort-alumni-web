import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachingPortalComponent } from './teaching-portal.component';
import { RouterModule } from '@angular/router';
import { UiCarouselModule } from '@ui-components/ui-carousel';
import { UiButtonModule } from '@ui-components/ui-button';
import { ArticlesCardsModule } from '../article/articles-cards/articles-cards.module';
import { IntroCardTeacherModule } from './teaching-portal-features/intro-card-teacher/intro-card-teacher.module';
import { TeachingPortalService } from './state/teaching-portal.service';
import { TeachingPortalStore } from './state/teaching-portal.store';
import { TeacherPortalQuery } from './state/teaching-portal.query';
import { ShowIfLoggedInDirectiveModule } from '../../auth/session/show-if-logged-in.directive';



@NgModule({
  declarations: [TeachingPortalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TeachingPortalComponent }], ),
    IntroCardTeacherModule,
    UiButtonModule,//TODO: check it becuse the layou import that module
    UiCarouselModule,
    ArticlesCardsModule,
    ShowIfLoggedInDirectiveModule,

  ],
  providers: [TeachingPortalService, TeachingPortalStore, TeacherPortalQuery]
})
export class TeachingPortalAreaModule {}
