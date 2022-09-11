import { FormGroup } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { VaInputInterface } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-date-picker',
  templateUrl: './abstract-date-picker.component.html',
  styleUrls: ['./abstract-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractDatePickerComponent {

  @Input() group:FormGroup;
  @Input() config:VaInputInterface;

}
