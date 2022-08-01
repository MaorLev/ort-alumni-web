import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';
import { ScrollSectionDirective } from './scroll-section.directive';

@NgModule({
  declarations: [
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective,
  ],
  imports: [CommonModule],
  exports: [
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective,
  ],
})
export class ScrollerModule {}
