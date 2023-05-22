import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ILogo } from './logo.type';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CustomOption } from '@utils/core/global-interfaces';
@Component({
  selector: 'ort-ui-material-card',
  templateUrl: './ui-material-card.component.html',
  styleUrls: ['./ui-material-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMaterialCardComponent implements OnInit {
  @Input() title: string;

  @Input() logo: ILogo | null;
  @Input() longText: string;
  @Input() currency: string;
  @Input() imageSize: 'sm' | 'md' | 'lg' | 'xl';
  imageclass: Record<'sm' | 'md' | 'lg' | 'xl', string>;
  safeImage: SafeUrl | undefined;

  @Input() chipsList1: CustomOption[];
  @Input() chipsList2: CustomOption[];
  @Input() chipsList3: CustomOption[];
  @Input() chipsListStringArr: string[];
  constructor(private sanitizer: DomSanitizer) {
    this.imageSize = 'md';
    this.safeImage = undefined;
    this.imageclass = {
      sm: 'mat-card-sm-image',
      md: 'mat-card-md-image',
      lg: 'mat-card-lg-image',
      xl: 'mat-card-xl-image',
    };
  }

  ngOnInit(): void {
    this.onGetImageSrc();
  }
  onGetImageSrc(): void {
    if (!!this.logo && !!this.logo.bytes)
      this.safeImage = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/${this.logo.fileExtension};base64,${this.logo.bytes}`
      );
  }
}
