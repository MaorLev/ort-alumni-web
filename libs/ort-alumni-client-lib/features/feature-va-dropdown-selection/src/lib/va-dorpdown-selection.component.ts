/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { map, Subject } from 'rxjs';
import { ortInput } from '@features/feature-va-input';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';


@Component({
  selector: 'ort-va-dorpdown-selection',
  templateUrl: './va-dorpdown-selection.component.html',
  styleUrls: ['./va-dorpdown-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaDorpdownSelectionComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VaDorpdownSelectionComponent),
      multi: true,
    },
  ],
})
export class VaDorpdownSelectionComponent
  implements OnInit, ControlValueAccessor, Validator, OnDestroy
{
  onDestroy$ = new Subject<void>();
  control = new FormControl();
  @Input() config: ortInput;

  constructor() {}

  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit() {
    this.control.valueChanges
      .pipe(
        map((val) => {
          if (this.control.valid) {
            this.onChange(val);
          }
        })
      )
      .subscribe();
  }

  writeValue(obj: any): void {
    this.control.patchValue({ ...obj });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  changeSelectedOption(option: any) {
    this.onChange(option);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
  registerOnValidatorChange(onValidatorChange: () => void) {
    this.onValidatorChange = onValidatorChange;
  }
  validate(control: FormControl): ValidationErrors | null {
    this.control = control;
    return this.control.validator;
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
