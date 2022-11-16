/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControlStatus, FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormBuilderService } from './form-builder.service';
import { cloneDeep } from '@utils/util-tools';
import { FormInterface } from './interfaces/form.interface';
import { Observable } from 'rxjs';
import { ButtonAction } from '@ui-components/ui-button';

@Component({
  selector: 'ort-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnChanges {
  @Input() configuration: FormInterface;
  @Input() dataToPatch: any | undefined;
  @Input() action: ButtonAction;
  @Output() submitted = new EventEmitter<any>();
  @Output() actionSubmitted = new EventEmitter<any>();
  isSubmitted: boolean;
  group: FormGroup;
  statusChanged: Observable<FormControlStatus> | undefined;

  get groupControls() {
    return this.group.controls;
  }
  constructor(private formBuilderService: FormBuilderService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['configuration'] && !(changes['configuration'].isFirstChange())){
      debugger;
      this.initialGroup();
    }
  }

  ngOnInit(): void {
    this.initialGroup();
  }

  initialGroup() {
    this.group = this.formBuilderService.buildStepperGroup(
      this.configuration.controls
    );

    if (this.dataToPatch) {
      const data = cloneDeep(this.dataToPatch);
      this.group.patchValue(data);
    }

    this.statusChanged = this.group.statusChanges;
  }
  extractFormGroup() {
    this.submitted.emit(this.group);
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
