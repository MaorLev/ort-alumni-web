import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
let apiLoaded = false;
export interface SizePlayer {
  width: number | undefined;
  height: number | undefined;
}
@Directive({
  selector: '[ortLoadYtApi]',
})
export class LoadYtApiDirective implements OnInit, AfterViewInit {
  @Output() sizePlayer = new EventEmitter<SizePlayer>();
  height: number | undefined;
  width: number | undefined;
  parentElement: any;
  constructor(private ef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.parentElement = this.renderer.parentNode(this.ef.nativeElement);
    if (!apiLoaded) {
      const tag = this.renderer.createElement('script');

      tag.src = 'https://www.youtube.com//iframe_api';

      this.renderer.appendChild(this.parentElement, tag);

      apiLoaded = true;
    }
  }
  ngAfterViewInit(): void {
    this.Resize();
  }
  @HostBinding()
  @HostListener('window:resize')
  Resize(): void {
    this.width = Math.min(
      this.parentElement.clientWidth
      // ,1200
    );
    this.height = this.width * 0.5624;

    this.sizePlayer.emit({ height: this.height, width: this.width });
  }
}
