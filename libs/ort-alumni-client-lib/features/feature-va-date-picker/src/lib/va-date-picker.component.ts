/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { map, takeUntil } from 'rxjs';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/member-ordering */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';

import { Input, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { VaInputInterface } from '@features/feature-va-input';
import { Subject } from 'rxjs';

@Component({
  selector: 'ort-va-date-picker',
  templateUrl: './va-date-picker.component.html',
  styleUrls: ['./va-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:  forwardRef(() => VaDatePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VaDatePickerComponent),
      multi: true,
    }
  ],
})
export class VaDatePickerComponent
  implements OnInit, ControlValueAccessor, OnDestroy, Validator
{
  formControl = new FormControl();
  @Input() config: VaInputInterface;
  onDestroy$ = new Subject<void>();

  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        map((val) => {
          // if(this.formControl.valid)
            this.onChange(val);
        })
      )
      .subscribe();
  }

  writeValue(obj: string): void {
    this.formControl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
  registerOnValidatorChange(onValidatorChange: () => void) {
    this.onValidatorChange = onValidatorChange;
  }
  validate(control: FormControl): ValidationErrors | null {
    this.formControl.setValidators(control.validator);

    return control.validator;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
