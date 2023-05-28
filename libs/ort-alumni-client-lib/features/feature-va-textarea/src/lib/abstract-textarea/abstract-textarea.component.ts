import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-textarea',
  templateUrl: './abstract-textarea.component.html',
  styleUrls: ['./abstract-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractTextareaComponent {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
}
