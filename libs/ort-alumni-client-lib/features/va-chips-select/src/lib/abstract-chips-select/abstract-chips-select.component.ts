import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-chips-select',
  templateUrl: './abstract-chips-select.component.html',
  styleUrls: ['./abstract-chips-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractChipsSelectComponent {
  @Input() group: FormGroup;
  @Input() config: VaInputInterface;

}
