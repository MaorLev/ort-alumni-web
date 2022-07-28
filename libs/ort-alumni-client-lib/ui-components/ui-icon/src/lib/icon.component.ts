import { ThemePalette } from '@angular/material/core';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './icons.enum';

@Component({
  selector: 'ort-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  svgIcon: string | undefined;
  @Input() className: string | undefined;
  @Input() color: ThemePalette | undefined;
  @Input() svgName: string | undefined;
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const viewName = this.svgName;
    const path = this.getSvgPath(viewName);
    if (viewName && path) {
      this.svgIcon = path;
      this.iconRegistry.addSvgIcon(
        viewName,
        this.sanitizer.bypassSecurityTrustResourceUrl(path)
      );
    }
  }

  getSvgPath(name: string | undefined): string | undefined {
    switch (name) {
      case 'sheet_icon':
        return Icons.Sheet;
      case 'linkedin_icon':
        return Icons.Linkedin;
      case 'youtube_icon':
        return Icons.Youtube;
      case 'instegram_icon':
        return Icons.Instegram;
      case 'waze_icon':
        return Icons.Waze;
      case 'garbage_icon':
        return Icons.Garbage;
      case 'upload_icon':
        return Icons.Upload;
      case 'ort_icon':
        return Icons.Ort;
      default:
        return undefined;
    }
  }
}
