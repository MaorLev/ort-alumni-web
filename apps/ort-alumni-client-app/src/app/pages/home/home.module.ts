import { UiCarouselModule } from '@ui-components/ui-carousel';
import { ArticlesCardsModule } from '../article/articles-cards/articles-cards.module';

import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroModule } from '../../layout/common-layout/hero/hero.module';
import { UiButtonModule } from '@ui-components/ui-button';
import { AddEnvVarPipeModule } from '@utils/util-pipes';
import { ScrollerModule } from '@utils/directives';
import { UiSpinnerModule } from '@ui-components/ui-spinner';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    QuicklinkModule,
    HeroModule,
    ScrollerModule,
    UiButtonModule,
    UiCardModule,
    UiCarouselModule,
    AddEnvVarPipeModule,
    UiSpinnerModule,
    ArticlesCardsModule,
  ],
  providers: [

  ],
  exports: [
     HomeComponent],
})
export class HomeModule {}
