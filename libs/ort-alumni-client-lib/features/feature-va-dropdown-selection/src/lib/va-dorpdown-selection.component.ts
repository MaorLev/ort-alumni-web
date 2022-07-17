import { map, Subject, takeUntil } from 'rxjs';
import { ortInput } from './../../../feature-va-input/src/lib/va-input.interface';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { VAInputComponent } from '@features/feature-va-input';

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
      multi: true
    }
  ],
})
export class VaDorpdownSelectionComponent
  implements OnInit, ControlValueAccessor
{
  formControl = new FormControl();
  @Input() config: ortInput;
  onDestroy$ = new Subject<void>();
  constructor() {}

  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit() {
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

  // registerOnChange(fn: (_: any) => {}) {
  //   this.onChange = fn;
  // }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  changeSelectedOption(option: string) {
    // this.selectedOption = option;
    this.onChange(option);
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
    this.formControl = control;
    const validators: ValidatorFn[] = [];

    if (this.config.validators?.isRequired) {
      validators.push(Validators.required);
    }

    this.formControl.setValidators(validators);

    return validators;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
