import { UiCarouselModule } from '@ui-components/ui-carousel';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';
import { ScrollerModule } from './../../core/directives/scroller/scroller.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroModule } from '../../layout/common-layout/hero/hero.module';
import { UiButtonModule } from '@ui-components/ui-button';
import { AddEnvVarPipeModule } from '@utils/pipes';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    HeroModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    ScrollerModule,
    UiButtonModule,
    UiCardModule,
    UiCarouselModule,
    AddEnvVarPipeModule

  ],
  exports:[QuicklinkModule ,HomeComponent]
})
export class HomeModule {}
