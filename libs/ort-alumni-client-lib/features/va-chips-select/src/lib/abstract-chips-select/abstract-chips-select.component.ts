import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-chips-select',
  templateUrl: './abstract-chips-select.component.html',
  styleUrls: ['./abstract-chips-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractChipsSelectComponent {
  @Input() group: FormGroup;
  @Input() config: VaFormInputInterface;

}
