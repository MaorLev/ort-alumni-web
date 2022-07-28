import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

  constructor() {
    this.withDownScroll = false;
  }
}
