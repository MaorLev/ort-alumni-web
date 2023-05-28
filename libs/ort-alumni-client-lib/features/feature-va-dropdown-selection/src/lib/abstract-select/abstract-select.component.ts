import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-select',
  templateUrl: './abstract-select.component.html',
  styleUrls: ['./abstract-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractSelectComponent {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
}
