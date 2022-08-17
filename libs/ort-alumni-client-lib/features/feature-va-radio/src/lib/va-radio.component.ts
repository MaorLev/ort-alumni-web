import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
} from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { ortInput } from '@features/feature-va-input';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ort-va-radio',
  templateUrl: './va-radio.component.html',
  styleUrls: ['./va-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaRadioComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VaRadioComponent),
      multi: true,
    },
  ],
})
export class VaRadioComponent implements OnInit {
  formControl = new FormControl();
  @Input() config: ortInput;
  onDestroy$ = new Subject<void>();
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
    this.formControl = control;
    return control.validator;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
