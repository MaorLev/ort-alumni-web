import { ThemePalette } from '@angular/material/core';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ort-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() svgPath: string | undefined;
  @Input() className: string | undefined;
  @Input() color: ThemePalette | undefined;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const path = this.svgPath;
    if (path) {
      this.iconRegistry.addSvgIcon(
        path,
        this.sanitizer.bypassSecurityTrustResourceUrl(path)
      );
    }
  }
}
