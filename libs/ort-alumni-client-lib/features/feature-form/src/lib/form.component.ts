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
  SimpleChanges,
} from '@angular/core';
import { FormBuilderService } from './form-builder.service';
import { cloneable, cloneDeep } from '@utils/util-tools';
import { FormInterface } from './interfaces/form.interface';
import {
  BehaviorSubject,
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  map,
  mapTo,
  Observable,
  of,
  ReplaySubject,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { ButtonAction } from '@ui-components/ui-button';

@Component({
  selector: 'ort-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnChanges {
  @Input() configuration: FormInterface;
  @Input() dataToPatch: any | undefined;
  // @Input() action: ButtonAction;
  @Output() submitted = new EventEmitter<any>();

  isSubmitted: boolean;
  group: FormGroup;
  statusChanged: Observable<FormControlStatus> | undefined;

  firstData: any;
  // dataChanged:BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(false);
  dataIsChanged: Observable<boolean | null>;
  @Input() set ReaquestIsDone(isDone: boolean | null | undefined) {
    if (isDone && this.dataToPatch) {
      this.validateSubmit();
    }
  }
  get groupControls() {
    return this.group.controls;
  }
  constructor(private formBuilderService: FormBuilderService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['configuration'] && !changes['configuration'].isFirstChange()) {
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
      this.group.patchValue(this.dataToPatch);
      this.validateSubmit();
    }
  }

  validateSubmit() {
    try {
      this.firstData = cloneable.deepCopy(this.group.value);
    } catch {
      this.firstData = cloneDeep(this.group.value);
    }
    this.statusAndGroupChanged();
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
      for (const prop in this.configuration.controls) {
        if (Array.isArray(currentVal[prop])) {
          if (currentVal[prop].length !== this.firstData[prop].length)
            return false;
          else if (
            currentVal[prop].length === 0 &&
            this.firstData[prop].length === 0
          )
            continue;
          else {
            if (
              typeof currentVal[prop][0] === 'object' &&
              currentVal[prop][0] !== null
            ) {
              const first = this.firstData[prop].sort(
                (a: { id: number }, b: { id: number }) => a.id - b.id
              );
              const current = currentVal[prop].sort(
                (a: { id: number }, b: { id: number }) => a.id - b.id
              );
              const arrIsSame = !this.firstData[prop].some(
                (first: any, index: number) =>
                  first.id != currentVal[prop][index].id
              );
              if (arrIsSame === false) return arrIsSame;
            }
          }
        } else if (
          typeof currentVal[prop] === 'object' &&
          currentVal[prop] !== null
        ) {
          if (currentVal[prop]?.id !== this.firstData[prop]?.id) return false;
          else continue;
        } else {
          if (currentVal[prop] !== this.firstData[prop]) return false;
        }
      }
      return true;
    } catch {
      alert('Validation problem');
      return true;
    }
  }
}
