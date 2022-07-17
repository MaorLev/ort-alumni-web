import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ort-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  @Input() heading: string | null = null;
  @Input() subheading: string| null = null;
  @Input() date: string | null = null;
  @Input() img: string | undefined ;
  @Input() detail: string | null = null;

}
