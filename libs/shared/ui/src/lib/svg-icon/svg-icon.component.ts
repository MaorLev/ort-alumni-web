import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { svgIcon } from './svg-icon.interface';

@Component({
  selector: 'ort-svg-icon[src_icon]',
  template: `
    <span class="icon" [ngStyle]="style" [innerHtml]="view_icon"></span>
  `,
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent implements OnInit {
  view_icon: SafeHtml;
  @Input() src_icon: string;
  @Input() style: svgIcon | null = null;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.view_icon = this.sanitizer.bypassSecurityTrustHtml(this.src_icon);
  }
}
