import { Directive, HostListener, Input } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[ortScrollAnchor]',
})
export class ScrollAnchorDirective {
  @Input('ortScrollAnchor') id: string | number;

  constructor(private manager: ScrollManagerDirective) {}

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.id);
  }
}
