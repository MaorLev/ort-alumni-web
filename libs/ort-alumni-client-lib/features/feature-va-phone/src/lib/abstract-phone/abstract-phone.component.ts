import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-phone',
  templateUrl: './abstract-phone.component.html',
  styleUrls: ['./abstract-phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractPhoneComponent  {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;

}
