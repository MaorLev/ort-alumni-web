import {

  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { YTInterface } from '@features/feature-youtube-player';
import { YTHero } from './YT-hero.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() withDownScroll: boolean;
  @Input() title: string;
  @Input() anchorName: string;
  YT_HERO_DATA:YTInterface = YTHero;

  constructor() {
    this.withDownScroll = false;
  }

}
