import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
@Component({
  selector: 'ort-abstract-check-list',
  templateUrl: './abstract-check-list.component.html',
  styleUrls: ['./abstract-check-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractCheckListComponent {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
}
