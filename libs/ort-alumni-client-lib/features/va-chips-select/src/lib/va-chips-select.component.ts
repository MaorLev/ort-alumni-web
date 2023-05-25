import { Validators } from '@angular/forms';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import {
  map,
  Observable,
  startWith,
  debounceTime,
} from 'rxjs';
import {
  MAT_CHIPS_DEFAULT_OPTIONS,
} from '@angular/material/chips';
import { cloneDeep } from '@utils/util-tools';
export interface SimpleInterface {
  id: number;
  name: string;
}

@Component({
  selector: 'ort-va-chips-select',
  templateUrl: './va-chips-select.component.html',
  styleUrls: ['./va-chips-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA],
      },
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaChipsSelectComponent),
      multi: true,
    },
  ],
})
export class VaChipsSelectComponent
  implements OnInit, ControlValueAccessor
{
@Input() config: VaFormInputInterface;
 options: SimpleInterface[] = [];
separatorKeysCodes: number[] = [ENTER, COMMA];
  autocompleteControl = new FormControl();
  filteredOptions: Observable<SimpleInterface[]>;
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  selectedOptions: SimpleInterface[] = [];

  private onChange: (selectedOptions: SimpleInterface[]) => void;
  private onTouched: () => void;
  isDisabled: boolean;
  ngOnInit() {
    this.options = cloneDeep(this.config.data.options);
    this.filteredOptions = this.autocompleteControl.valueChanges.pipe(
      debounceTime(400),
      startWith(''),
      map((value: string | SimpleInterface) => (typeof value === 'string' ? value : value?.name)),
      map((name: string) => (name ? this.filter(name) : this.options.slice()))
    );
  }

  displayFn(option: SimpleInterface): string {
    return option?.name || '';
  }

  removeOption(option: SimpleInterface): void {
    const index = this.selectedOptions.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
      this.options.push(option);
      this.onChange(this.selectedOptions);
    }
  }
  onOptionSelected(option: SimpleInterface): void {
    this.selectedOptions.push(option);
    const index = this.options.indexOf(option);
    if (index >= 0) {
      this.options.splice(index, 1);
    }
    this.onChange(this.selectedOptions);
    this.autocompleteControl.setValue('');
    const input = this.input.nativeElement
    if (input) {
      input.value = '';
    }
  }

  writeValue(selectedOptions: SimpleInterface[]): void {
    if(selectedOptions && selectedOptions.length > 0) {
    this.selectedOptions = cloneDeep(selectedOptions);
    selectedOptions.forEach((option) => {
      const temp = this.options.filter(op => op.id == option.id);
      const index = this.options.indexOf(temp[0]);
      if (index >= 0) {
        this.options.splice(index, 1);
      }
    })}
    else this.selectedOptions = [];
  }

  registerOnChange(fn: (selectedOptions: SimpleInterface[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(this.selectedOptions && this.selectedOptions.length > 0 && isDisabled){
    this.selectedOptions.forEach((option) => {
      this.options.push(option);
    })
    this.selectedOptions = [];
    this.onChange(this.selectedOptions);
    }
    this.isDisabled = isDisabled;
    isDisabled ? this.autocompleteControl.disable() : this.autocompleteControl.enable();
  }

  private filter(name: string): SimpleInterface[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
