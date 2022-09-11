import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';
@Component({
  selector: 'ort-abstract-check-list',
  templateUrl: './abstract-check-list.component.html',
  styleUrls: ['./abstract-check-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractCheckListComponent {
  @Input() group:FormGroup;
  @Input() config:VaInputInterface;
}
