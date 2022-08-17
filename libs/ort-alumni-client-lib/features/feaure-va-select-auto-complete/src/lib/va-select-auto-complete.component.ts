import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  OnDestroy,
  Input,
} from '@angular/core';
import {
  AsyncValidator,
  ControlValueAccessor,
  FormControl,
  NG_ASYNC_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from '@angular/forms';

import { ortInput } from '@features/feature-va-input';
import { cloneDeep } from '@utils/util-others';
import { map, Subject, startWith, Observable, of } from 'rxjs';

@Component({
  selector: 'ort-va-select-auto-complete',
  templateUrl: './va-select-auto-complete.component.html',
  styleUrls: ['./va-select-auto-complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaSelectAutoCompleteComponent),
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => VaSelectAutoCompleteComponent),
      multi: true,
    },
  ],
})
export class VaSelectAutoCompleteComponent
  implements OnInit, ControlValueAccessor, AsyncValidator, OnDestroy
{
  onDestroy$ = new Subject<void>();
  control = new FormControl();
  @Input() config: ortInput;
  filteredOptions!: Observable<any[]>;
  options$: Observable<any>;
  onChange = (obj: any) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {
    this.options$ = this.config.data.options$;

    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(400),
      map((value) => {
        // if (this.control.valid) {
          this.onChange(cloneDeep(value));
        // }
        return typeof value === 'string' ? value : value.name;
      }),
      switchMap((state) => {
        return state ? this._filterStates(state) : this.options$;
      })
    );
  }
  writeValue(obj: any): void {
    this.control.patchValue(cloneDeep(obj));
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  changeSelectedOption(option: any) {
    this.onChange(cloneDeep(option));
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
  displayFn(option: any): string {
    return option && option.name ? option.name : '';
  }
  private _filterStates(value: string): Observable<any[]> {
    const filterValue = value.toLowerCase();
    return this.options$.pipe(
      map((options) => {
        return options.filter((option: any) =>
          option.name.toLowerCase().includes(filterValue)
        );
      })
    );
  }

  validate(control: FormControl): Observable<ValidationErrors | null> {

      const option = control.value;

      return this.options$.pipe(
        map((options) => {
          if(typeof option === 'object')
          for (let i = 0; i < options.length; i++) {
            if (options[i].id === option.id) return null;
          }
          const error = { invalidAutocompleteString: { value: control.value } };
          this.control.setErrors(error);
          return error;
        })
      );

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
