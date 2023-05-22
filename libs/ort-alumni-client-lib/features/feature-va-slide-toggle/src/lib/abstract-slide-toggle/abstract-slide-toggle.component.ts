import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-slide-toggle',
  templateUrl: './abstract-slide-toggle.component.html',
  styleUrls: ['./abstract-slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractSlideToggleComponent {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
}
