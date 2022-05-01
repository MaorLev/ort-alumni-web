import { ThemePalette } from '@angular/material/core';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ort-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() color: ThemePalette;
  @Input() disable = false;
}
