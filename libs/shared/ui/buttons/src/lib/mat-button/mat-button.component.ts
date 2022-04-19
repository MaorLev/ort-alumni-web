import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ml-mat-button',
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatButtonComponent {
  @Input() color: ThemePalette;
  @Input() disable = false;
}
