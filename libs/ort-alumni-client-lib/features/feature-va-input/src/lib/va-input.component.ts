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
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { map, Subject, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'ort-va-input',
  templateUrl: './va-input.component.html',
  styleUrls: ['./va-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VAInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => VAInputComponent),
      multi: true,
    },
  ],
})
export class VAInputComponent
  implements OnInit, ControlValueAccessor, Validator, OnDestroy
{
  formControl = new FormControl();
  hide: boolean;
  type: string | undefined;


  @Input() config: VaFormInputInterface;
  onDestroy$ = new Subject<void>();

  constructor() {

    this.hide = false;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit(): void {
    if(this.config.type === 'password')
    this.hide = true;


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
  validate(control: FormControl): ValidationErrors | null {
    this.formControl.setValidators(control.validator);

    return control.validator;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
