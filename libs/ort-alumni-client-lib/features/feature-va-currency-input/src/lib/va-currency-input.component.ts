/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
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
  Validator,
} from '@angular/forms';
import { map, Subject, takeUntil } from 'rxjs';
import { VaInputInterface } from '@features/feature-va-input';
@Component({
  selector: 'ort-va-currency-input',
  templateUrl: './va-currency-input.component.html',
  styleUrls: ['./va-currency-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaCurrencyInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VaCurrencyInputComponent),
      multi: true,
    },
  ],
})
export class VaCurrencyInputComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
  formControl = new FormControl();

  @Input() config: VaInputInterface;
  onDestroy$ = new Subject<void>();

  constructor() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit(): void {

    this.formControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        map((val) => {
          if (this.formControl.valid) {
            this.onChange(val);
          }
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
