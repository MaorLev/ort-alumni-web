import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-currency-input',
  templateUrl: './abstract-currency-input.component.html',
  styleUrls: ['./abstract-currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractCurrencyInputComponent {

  @Input() group:FormGroup;
  @Input() config:VaInputInterface;

}
