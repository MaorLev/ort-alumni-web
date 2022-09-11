/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControlStatus, FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilderService } from './form-builder.service';
import { cloneDeep } from '@utils/util-others';
import { FormInterface } from './interfaces/form.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'ort-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @Input() configuration: FormInterface;
  @Input() dataToPatch: any | undefined;
  @Output() submitted = new EventEmitter<any>();
  isSubmitted:boolean;
  group: FormGroup;
    statusChanged: Observable<FormControlStatus> | undefined;

  get groupControls() {
    return this.group.controls;
  }
  constructor(private formBuilderService: FormBuilderService) {
  }

  ngOnInit(): void {
    this.group = this.formBuilderService.buildStepperGroup(this.configuration.controls);

    if (this.dataToPatch) {
      const data = cloneDeep(this.dataToPatch);
      this.group.patchValue(data);
    }

    this.statusChanged = this.group.statusChanges;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asIsOrder(a: any, b: any) {
    return 1;
  }
}
