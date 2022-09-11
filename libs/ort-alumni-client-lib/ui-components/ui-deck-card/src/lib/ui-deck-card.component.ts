import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { CardDeckTemplateContext } from './card.types';

@Component({
  templateUrl: './ui-deck-card.component.html',
  styleUrls: ['./ui-deck-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDeckCardComponent {
  @ViewChild('primaryCard', { static: true })
  primaryCardTemplate: TemplateRef<CardDeckTemplateContext>;

  @ViewChild('plainCard', { static: true })
  plainCardTemplate: TemplateRef<CardDeckTemplateContext>;
}
