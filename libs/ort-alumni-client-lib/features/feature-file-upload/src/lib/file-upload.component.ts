/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  HostListener,
  ElementRef,
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
import { VaInputInterface } from '@features/feature-va-input';
import { Observable, of } from 'rxjs';

export interface UploadError {
  requiredFileType: string;
  uploadFailed?: boolean;
}
@Component({
  selector: 'ort-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  internalError:Observable<string> | null;

  @Input() nameBefore: string | undefined;
  // formControl: FormControl;
  @Input() config: VaInputInterface;
  file: File | null = null;
  counter:number;
  isDisabled: boolean;
  onChange: (obj: any) => {};
  onTouched = () => {};
  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;
    this.nameBefore = undefined;

    this.onChange(file);
    this.onTouched();
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: any) {
    this.host.nativeElement.value = '';
    this.file = null;

  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // this.config = {
    //   ...this.config,
    //   data: { ...this.config.data, isDisabled: isDisabled },
    // };
    this.isDisabled = isDisabled;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  formatBytes(bytes: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const decimals = 0;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  deleteFile() {
    const file = null;
    this.host.nativeElement.value = '';
    this.nameBefore = undefined;
    this.file = file;
    this.counter = 1;
    this.setDisabledState(false);
    this.onChange(file);
    this.onTouched();
  }
  onValidatorChange = () => {};
  registerOnValidatorChange(onValidatorChange: () => void) {
    this.onValidatorChange = onValidatorChange;
  }

  validate(control: FormControl): ValidationErrors | null {
    // this.formControl = control;
    const validators: ValidatorFn[] = [];

    //attention!! this is custom validation for situation that update and create and both required
    //if this control named "image" doing code bellow...
    if(this.config.name === 'image'){

      if (!(this.nameBefore || control.value)) {
        validators.push(Validators.required);
        if(this.counter){
          this.internalError = of("נדרש להעלות תמונה");
          this.onTouched();
        }
        else
        this.counter = 1;
      }
      else {
        this.internalError = null;
      }

    }

    return validators;
  }
}
