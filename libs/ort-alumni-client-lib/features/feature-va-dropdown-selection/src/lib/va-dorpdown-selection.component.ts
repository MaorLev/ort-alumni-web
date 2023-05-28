
import { map, Observable, of, Subject } from 'rxjs';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  OnDestroy
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { cloneDeep } from '@utils/util-tools';
import { MatSelectChange } from '@angular/material/select';

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
  @Input() config: VaFormInputInterface;

  options$: Observable<any[]>;

  onChange = (obj: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};
  ngOnInit() {

    if (this.isObservable(this.config.data.options)) {
      this.options$ = this.config.data.options;
    } else {
      this.options$ = of(this.config.data.options);
    }
    this.control.valueChanges
    .pipe(
      map((val) => {
        if (this.control.valid) this.onChange(val);
      })
      )
      .subscribe();
  }

  writeValue(obj: any): void {
    const object = cloneDeep(obj);
    this.control.patchValue(object);
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
    this.control.setValidators(control.validator);
    if (
      this.config.data &&
      this.config.data.isMultiple &&
      this.config.data.limitation &&
      control.value &&
      control.value.length > this.config.data.limitation
    ) {
      return { selectionLimitExceeded: true };
    }
    return this.control.validator;
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onSelectionChange(event: MatSelectChange) {
    if (
      this.config.data &&
      this.config.data.isMultiple &&
      this.config.data.limitation &&
      event.value.length > this.config.data.limitation
    ) {
      const selectedOptions = event.source.selected as any[];
      selectedOptions.splice(
        selectedOptions.indexOf(event.value[event.value.length - 1]),
        1
      );
    }
    this.onChange(event.value);
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  isObservable(input: any): boolean {
    return input instanceof Observable;
  }
}
