import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';


@Component({
  selector: 'ort-abstract-input',
  templateUrl: './abstract-input.component.html',
  styleUrls: ['./abstract-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractInputComponent {

  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;

}
