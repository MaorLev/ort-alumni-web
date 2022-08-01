/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ortInput } from '@features/feature-va-input';
import { FormBuilderService } from './form-builder.service';
import { cloneDeep } from '@utils/util-others';

@Component({
  selector: 'ort-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @Input() configuration: Record<string, ortInput>;
  @Input() dataToPatch: any | undefined;
  @Output() submitted = new EventEmitter<any>();
  group: FormGroup;

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    this.group = this.formBuilderService.buildStepperGroup(this.configuration);
    if (this.dataToPatch) {
      const data = cloneDeep(this.dataToPatch);
      this.group.patchValue(data);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asIsOrder(a: any, b: any) {
    return 1;
  }
}
