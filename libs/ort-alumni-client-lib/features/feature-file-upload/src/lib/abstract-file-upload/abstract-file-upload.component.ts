import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ortInput } from '@features/feature-va-input';

@Component({
  selector: 'ort-abstract-file-upload',
  templateUrl: './abstract-file-upload.component.html',
  styleUrls: ['./abstract-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractFileUploadComponent implements OnInit {
  @Input() group:FormGroup;
  @Input() config:ortInput;
  @Input() nameBefore:string;
  constructor() {}

  ngOnInit(): void {}
}
