import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckDirective } from './deck.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [DeckDirective],
  exports: [DeckDirective],
})
export class UiDeckCardModule {}
