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
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ort-va-slide-toggle',
  templateUrl: './va-slide-toggle.component.html',
  styleUrls: ['./va-slide-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaSlideToggleComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VaSlideToggleComponent),
      multi: true,
    },
  ],
})
export class VaSlideToggleComponent
  implements OnInit, ControlValueAccessor, Validator, OnDestroy
{
  formControl = new FormControl();
  @Input() config: VaInputInterface;
  @Output() changes = new EventEmitter<any>();
  onDestroy$ = new Subject<void>();

  constructor() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        map((val) => {
          // if (this.formControl.valid) {
          this.onChange(val);
          // }
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
  validate(ctrl: FormControl): ValidationErrors | null {

    return ctrl.validator;
  }


  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
