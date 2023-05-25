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
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { CustomOption, VaFormInputInterface } from '@utils/core/global-interfaces';
import { map, startWith, Observable } from 'rxjs';

@Component({
  selector: 'ort-va-select-auto-complete',
  templateUrl: './va-select-auto-complete.component.html',
  styleUrls: ['./va-select-auto-complete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VaSelectAutoCompleteComponent),
      multi: true,
    }
  ],
})
export class VaSelectAutoCompleteComponent
  implements OnInit, ControlValueAccessor
{
  @Input() config: VaFormInputInterface;
  options: CustomOption[];

  autocompleteControl = new FormControl();
  filteredOptions!: Observable<CustomOption[]>;

  private onChange: (value: CustomOption) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.options = this.config.data.options ? this.config.data.options : [];
    this.filteredOptions = this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value?.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  writeValue(value: CustomOption): void {
    this.autocompleteControl.setValue(value);
  }

  registerOnChange(fn: (value: CustomOption) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  onBlur() {
    if (!this.autocompleteControl.value || typeof this.autocompleteControl.value === 'string') {
      this.autocompleteControl.setValue('');
    }
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.autocompleteControl.disable() : this.autocompleteControl.enable();
  }

  onOptionSelected(event: any): void {
    this.writeValue(event.option.value);
    this.onChange(event.option.value);
    this.onTouched();
  }

  displayFn(item?: CustomOption): string {
    return item ? item.name : '';
  }

  private _filter(name: string): CustomOption[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}