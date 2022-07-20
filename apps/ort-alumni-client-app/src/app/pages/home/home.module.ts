import { UiCarouselModule } from '@ui-components/ui-carousel';
import { QuicklinkModule } from 'ngx-quicklink';
import { UiCardModule } from '@ui-components/ui-card';

import { MatButtonModule } from '@angular/material/button';
import { ScrollerModule } from './../../core/directives/scroller/scroller.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroModule } from '../../layout/common-layout/hero/hero.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxGlideModule } from 'ngx-glide';
import { UiButtonModule } from '@ui-components/ui-button';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    QuicklinkModule,
    HeroModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    ScrollerModule,
    MatButtonModule,
    MatIconModule,
    NgxGlideModule,
    UiButtonModule,
    UiCardModule,
    UiCarouselModule

  ],
  exports:[QuicklinkModule ,HomeComponent]
})
export class HomeModule {}
