import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ortInput } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-phone',
  templateUrl: './abstract-phone.component.html',
  styleUrls: ['./abstract-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractPhoneComponent  {
  @Input() group:FormGroup;
  @Input() config:ortInput;

}
