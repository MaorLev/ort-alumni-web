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
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { ortInput } from '@features/feature-va-input';
import { map, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'ort-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckListComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckListComponent),
      multi: true,
    },
  ],
})
export class CheckListComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
  formControl = new FormControl();
  @Input() config: ortInput;
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
    if(this.config.name === 'checkbox')
    return this.config.data.validate(ctrl)

    return ctrl.validator;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
