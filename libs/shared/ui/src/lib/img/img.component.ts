import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IImg } from './i-img.interface';

@Component({
  selector: 'ort-img[img_detail]',
  template: ` <img [src]="img_detail.src" [alt]="img_detail.alt" [ngClass]="img_detail.class || ''"
  [ngStyle]="img_detail.customStyle"> `,
  styles: [`img{
    max-height: 60px;
    max-width: 100px;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgComponent {

  @Input() img_detail:IImg;

}
