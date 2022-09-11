import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureYoutubePlayerComponent } from './feature-youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LoadYtApiDirective } from './load-yt-api.directive';
@NgModule({
  imports: [CommonModule, YouTubePlayerModule],
  declarations: [FeatureYoutubePlayerComponent, LoadYtApiDirective],
  exports: [FeatureYoutubePlayerComponent],
})
export class FeatureYoutubePlayerModule {}
