import { AfterContentInit, ContentChildren, Directive, ElementRef, NgModule, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[ortCheckActiveContent]',
})
export class CheckActiveContentDirective implements AfterContentInit {
  @ContentChildren(ElementRef, { descendants: true }) contentChildren: QueryList<ElementRef>;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    if (this.contentChildren?.length) {
      // console.log('Active content detected:', this.contentChildren);
      this.el.nativeElement.style.display = 'block';
    } else {
      // console.log('No active content detected');
      if(this.el.nativeElement?.style?.display)
      this.el.nativeElement.style.display = 'none';
    }
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [CheckActiveContentDirective],
  exports: [CheckActiveContentDirective],
})
export class CheckActiveContentDirectiveModule {}
