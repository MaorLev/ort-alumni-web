import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { logo_style } from './logo-style.interface';

@Component({
  selector: 'ort-svg-logo[src_icon]',
  template: `
    <div class="logo" [ngStyle]="style" [innerHtml]="view_icon"></div>
  `,
  styles: [
    `
      svg {
        width: 100%;
        height: 100%;
      }
      .logo {
        /* width: 20px; */
        /* height: 20px; */
        display: inline-block;
        /* fill: red; */
        /* stroke: blue; */
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLogoComponent implements OnInit {
  view_icon: SafeHtml;
  @Input() src_icon: string;
  @Input() style: logo_style | null = null;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.view_icon = this.sanitizer.bypassSecurityTrustHtml(this.src_icon);
  }
}
