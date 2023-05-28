import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[ortScrollSection]'
})
export class ScrollSectionDirective implements OnInit, OnDestroy {
  @Input('ortScrollSection') id: string | number;

  constructor(
     private host: ElementRef<HTMLElement>,
     private manager: ScrollManagerDirective
  ) {}

  ngOnInit() {
    this.manager.register(this);
  }

  ngOnDestroy() {
    this.manager.remove(this);
  }

  scroll() {
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
