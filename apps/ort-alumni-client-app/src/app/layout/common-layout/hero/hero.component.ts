import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
  @Input() withDownScroll:boolean;
  @Input() title:string;
  @Input() anchorName:string;

  constructor() {
    this.withDownScroll = false;
  }

  ngOnInit(): void {
  }
}
