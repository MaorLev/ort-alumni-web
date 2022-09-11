import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '../va-input.interface';

@Component({
  selector: 'ort-abstract-input',
  templateUrl: './abstract-input.component.html',
  styleUrls: ['./abstract-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractInputComponent {

  @Input() group:FormGroup;
  @Input() config:VaInputInterface;

}
