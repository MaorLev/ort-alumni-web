import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { uiIcon } from '@ui-components/ui-icon';
import { ButtonAction } from './button-action.enum';
export type ButtonTypes = 'button' | 'submit';
@Component({
  selector: 'ort-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() actionSubmitted = new EventEmitter<ButtonAction>();
  @Input() action: ButtonAction;
  @Input() disabled: boolean | null = false;
  @Input() skipLocationByRouting: boolean;
  @Input() className: string | undefined = '';
  @Input() routeTo: string | null = null;
  @Input() iconName: string | null = null;
  @Input() value: string | null = null;
  @Input() iconColor: 'primary' | 'accent' | 'warn';
  @Input() buttonColor: 'primary' | 'accent' | 'warn';
  @Input() type: ButtonTypes | undefined = 'button';
  @Input() customIcon: uiIcon | undefined;

  constructor() {
    this.skipLocationByRouting = false;
  }
}
