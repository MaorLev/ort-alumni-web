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
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import {
  map,
  Observable,
  Subject,
  takeUntil,
  startWith,
  tap,
  BehaviorSubject,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs';
import {
  MatChipInputEvent,
  MAT_CHIPS_DEFAULT_OPTIONS,
} from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
// separatorKeysCodes: number[] = [ENTER, COMMA];
// filteredChips: Observable<SimpleInterface[]>;
// chips: SimpleInterface[];
// allchips: SimpleInterface[];
// chipControl = new FormControl();
// @Input() config: VaFormInputInterface;

// @ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;


// IsDisabled: BehaviorSubject<boolean | null> = new BehaviorSubject<
//   boolean | null
// >(null);
// isDisabled: Observable<boolean | null> = this.IsDisabled.asObservable();

// onDestroy$ = new Subject<void>();
// constructor() {
//   this.Chips = [];
//   this.allChips = [];
// }

// get Chips(): SimpleInterface[] {
//   return this.chips;
// }
// set Chips(chips: SimpleInterface[]) {
//   this.chips = chips;
// }
// get allChips(): SimpleInterface[] {
//   return this.allchips.sort((a, b) => a.id - b.id);
// }
// set allChips(chips: SimpleInterface[]) {
//   this.allchips = chips;
// }

// // eslint-disable-next-line @typescript-eslint/no-empty-function
// onChange = (obj: any) => {};
// onTouched = () => {};

// ngOnInit(): void {
//   this.config.data.options$
//     .pipe(
//       tap((allChips: SimpleInterface[]) => {
//         if (allChips.length > 0) {
//           allChips.forEach((chip) => {
//             const { id, name } = chip;
//             this.allChips.push({ id, name });
//           });
//           this.excludeExistChips();
//         }
//       }),
//       takeUntil(this.onDestroy$)
//     )
//     .subscribe(() => {
//       this.filteredChips = this.chipControl.valueChanges.pipe(
//         startWith(null),
//         map((chip: string | null) => {
//           return chip
//             ? typeof chip === 'string'
//               ? this._filter(chip)
//               : this.allChips.slice()
//             : this.allChips.slice();
//         })
//       );
//     });
// }

// private excludeExistChips() {
//   for (let i = 0; i < this.Chips.length; i++) {
//     this.allChips = this.allChips.filter((chip) => {
//       return chip.name !== this.Chips[i].name;
//     });
//   }
// }
// private includeExistChips() {
//   for (let i = 0; i < this.Chips.length; i++) {
//     this.allChips.push(this.Chips[i]);
//   }
// }
// writeValue(obj: SimpleInterface[]): void {
//   if (!obj) obj = [];
//   if (obj.length >= this.Chips.length) {
//     this.Chips = obj;
//     this.excludeExistChips();
//   } else if (obj.length < this.Chips.length) {
//     this.includeExistChips();
//     this.Chips = obj;
//     // מקום מסוכן שבתתי את השורה מתחת ואני לא יודע מתי זה יכול להגיע לכאן
//     //השבתתי אותה כי זהניער את העץ ולמשל השבתתי אותה גם בדיסייבלד כאן אבל שמתי במקום ביאייבר סאבג'קט
//     // this.changeDetector.detectChanges();
//     this.chipControl.updateValueAndValidity({
//       onlySelf: false,
//       emitEvent: true,
//     });
//   }
// }
// registerOnChange(fn: any): void {
//   this.onChange = fn;
// }
// registerOnTouched(onTouched: any): void {
//   this.onTouched = onTouched;
// }
// setDisabledState(isDisabled: boolean): void {
//   this.IsDisabled.next(isDisabled);
//   // this.changeDetector.detectChanges();
// }

// add(event: MatChipInputEvent): void {
//   const value = event.value || '';
//   const filterdArr = this._filter(value);
//   const fullVal = filterdArr[0] || ({} as SimpleInterface);
//   this.chipControl.clearValidators();

//   if (value) {
//     let exist = false;
//     this.allChips.forEach((chip) => {
//       if (
//         chip === fullVal &&
//         !this.IsValExistInCurrChipsArrById(fullVal?.id)
//       ) {
//         exist = true;
//         this.Chips.push(fullVal);
//         const id = this.allChips.indexOf(fullVal);
//         this.allChips.splice(id, 1);
//         this.onChange(this.Chips);
//         this.onTouched();
//       }
//     });
//     if (exist === false) this.chipControl.addValidators(Validators.required);
//   }

//   event.chipInput?.clear();

//   this.chipControl.setValue(null);
// }

// private IsValExistInCurrChipsArrById(idVal: number): boolean {
//   const id = this.Chips.findIndex((val) => val.id === idVal);
//   return id !== -1;
// }
// remove(chip: SimpleInterface): void {
//   const index = this.Chips.indexOf(chip);

//   if (index >= 0) {
//     this.Chips.splice(index, 1);
//     this.allChips.push(chip);
//     this.onChange(this.Chips);
//     this.chipControl.updateValueAndValidity({
//       onlySelf: false,
//       emitEvent: true,
//     });
//     this.onTouched();
//   }
// }
// selected(event: MatAutocompleteSelectedEvent): void {
//   const value: SimpleInterface = event.option.value;
//   this.Chips.push(value);
//   const id = this.allChips.indexOf(value);
//   this.allChips.splice(id, 1);
//   this.chipControl.clearValidators();
//   this.onChange(this.Chips);
//   this.chipInput.nativeElement.value = '';
//   this.chipControl.setValue(null);
//   this.onTouched();
// }

// private _filter(value: string): SimpleInterface[] {
//   const filterValue = value.toLowerCase();
//   return this.allChips.filter((chip) => {
//     return chip.name.toLowerCase().includes(filterValue);
//   });
// }
// ngOnDestroy(): void {
//   this.onDestroy$.next();
// }
