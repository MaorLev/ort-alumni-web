/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControlStatus, FormGroup } from '@angular/forms';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilderService } from './form-builder.service';
import { cloneable, cloneDeep } from '@utils/util-tools';
import { FormInterface } from './interfaces/form.interface';
import {
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
} from 'rxjs';

@Component({
  selector: 'ort-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnChanges {
  @Input() configuration: FormInterface;
  @Input() dataToPatch: any | undefined;
  @Output() submitted = new EventEmitter<any>();

  isSubmitted: boolean;
  group: FormGroup;
  statusChanged: Observable<FormControlStatus> | undefined;

  initialData: any;
  dataIsChanged: Observable<boolean | null>;

  get groupControls() {
    return this.group.controls;
  }
  constructor(private formBuilderService: FormBuilderService) {}
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['configuration']) {
      this.initialGroup();
    }
    // for the following scnarios:
    // configuration changes happens:
    // we have a few forms and we move between each other
    // when initial data apply
    // dataToPatch changes happens :
    // initial data apply
    // when the request returns
    if (
      this.dataToPatch &&
      (changes['configuration'] || changes['dataToPatch'])
    ) {
      this.group.patchValue(this.dataToPatch);
      this.cloneInitialData();
      this.statusAndGroupChanged();
    }
  }


  private initialGroup() {
    this.group = this.formBuilderService.buildStepperGroup(
      this.configuration.controls
    );
  }
  private cloneInitialData() {
    try {
      this.initialData = cloneable.deepCopy(this.group.value);
    } catch {
      this.initialData = cloneDeep(this.group.value);
    }
  }

  private statusAndGroupChanged() {
    this.dataIsChanged = this.group.valueChanges.pipe(
      combineLatestWith([this.group.statusChanges]),
      distinctUntilChanged(),
      debounceTime(400),
      startWith([null, 'INVALID']),
      map(([val, status]) => {
        if (status != 'VALID') return true;
        return this.areSameValsValidation(val);
      })
    );
  }
  extractFormGroup() {
    this.submitted.emit(this.group);
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }

  private areSameValsValidation(currentVal: any): boolean {
    try {
      const initial = this.initialData;
      const current = currentVal;
      for (const prop in this.configuration.controls) {
        // if (!(!!current[prop] && !!initial[prop])) continue;
        if (Array.isArray(current[prop])) {
          if (current[prop].length !== initial[prop].length) return false;
          else if (current[prop].length === 0 && initial[prop].length === 0)
            continue;
          else {
            if (
              typeof current[prop][0] === 'object' &&
              current[prop][0] !== null
            ) {
              initial[prop].sort(
                (a: { id: number }, b: { id: number }) => a.id - b.id
              );
              current[prop].sort(
                (a: { id: number }, b: { id: number }) => a.id - b.id
              );
              const arrIsSame = !initial[prop].some(
                (first: any, index: number) =>
                  first.id != current[prop][index].id
              );
              if (arrIsSame === false) return arrIsSame;
            }
          }
        } else if (
          typeof current[prop] === 'object' &&
          current[prop] !== null
        ) {
          if (current[prop]?.id !== initial[prop]?.id) return false;
          else continue;
        } else {
          if (current[prop] !== initial[prop]) return false;
        }
      }
      return true;
    } catch {
      alert('Validation problem');
      return true;
    }
  }
}
