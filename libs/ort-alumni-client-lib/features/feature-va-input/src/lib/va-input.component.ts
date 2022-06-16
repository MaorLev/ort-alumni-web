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
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { map, Subject, takeUntil } from 'rxjs';
import { ortInput } from './va-input.interface';


@Component({
  selector: 'ort-va-input[config]',
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
      multi: true
    }
  ],
})
export class VAInputComponent implements OnInit, ControlValueAccessor,Validator, OnDestroy {
  formControl = new FormControl();
  hide = false;
  type: string | undefined = 'text';

  @Input() config: ortInput;
  onDestroy$ = new Subject<void>();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit(): void {

    if (this.config.type) {
      this.oparteLogicType(this.config.name);
    }
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
  oparteLogicType(type:string | undefined)
  {

    this.type = type;
    switch(this.config.name)
    {
      case 'password':
        this.hide = true;
        break;
    }
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
    const validators: ValidatorFn [] = [];

    if(this.config.validators?.isRequired)
    {
     validators.push(Validators.required);
    }
    if(this.config.validators?.pattern)
    {
      validators.push(Validators.pattern(this.config.validators.pattern));
    }
    if(this.config.validators?.minLength)
    {
      validators.push(Validators.minLength(this.config.validators.minLength));
    }
    if(this.config.validators?.maxLength)
    {
      validators.push(Validators.maxLength(this.config.validators.maxLength));
    }
    this.formControl.setValidators(validators);

    return validators;
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
