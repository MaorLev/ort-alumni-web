
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ScrollerModule } from '@utils/directives';
import { FeatureYoutubePlayerModule } from '@features/feature-youtube-player'

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, FeatureYoutubePlayerModule,
  ScrollerModule, ],
  exports: [ HeroComponent]
})
export class HeroModule {}
