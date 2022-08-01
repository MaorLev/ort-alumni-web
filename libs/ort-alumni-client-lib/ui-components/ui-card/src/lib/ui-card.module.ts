import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TruncatePipeModule } from '@utils/util-pipes';

@NgModule({
  imports: [CommonModule, TruncatePipeModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class UiCardModule {}
