import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-file-upload',
  templateUrl: './abstract-file-upload.component.html',
  styleUrls: ['./abstract-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractFileUploadComponent {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
  @Input() nameBefore:string;
}
