import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormControl, FormControlStatus } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';

@Component({
  selector: 'ort-abstract-file-upload',
  templateUrl: './abstract-file-upload.component.html',
  styleUrls: ['./abstract-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractFileUploadComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:VaFormInputInterface;
  @Input() nameBefore:string;
  // statusChanged: Observable<FormControlStatus> | undefined;
  // formControl:FormControl | null;

  ngOnInit(): void {

    // console.log(this.group)
    // this.formControl = this.group.get(this.config.name) as FormControl | null;
    // this.statusChanged = this.formControl?.statusChanges
  }
}
