import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export type ButtonTypes = 'button' | 'submit';
@Component({
  selector: 'ort-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  @Input() disabled: boolean | undefined = false;
  @Input() className: string | undefined = '';
  @Input() routeTo: string | null = null;
  @Input() icon: string | null = null;
  @Input() type: ButtonTypes | undefined = 'button';

}
