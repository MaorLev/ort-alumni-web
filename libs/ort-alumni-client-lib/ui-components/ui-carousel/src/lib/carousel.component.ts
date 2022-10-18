import { Component, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'ort-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
  @Input() perView:number;
  @Input() showBullets:boolean;
  @Input() bound:boolean;
  @Input() direction: "rtl" | "ltr";
  @Input() startAt:number | undefined;
  constructor() {
    this.perView = 2;
    this.showBullets = false;
    this.bound = true;
    this.direction = "rtl";

  }



}
