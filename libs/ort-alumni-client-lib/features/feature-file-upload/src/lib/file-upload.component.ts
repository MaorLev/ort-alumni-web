/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { HttpClient, HttpEventType } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  HostListener,
  ElementRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Observable } from 'rxjs';



export interface UploadError{
  requiredFileType:string,
  uploadFailed?:boolean
}
@Component({
  selector: 'ort-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  FileUploadComponent),
      multi: true,
    },
  ],
})
// {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() =>  FileUploadComponent),
//   multi: true,
// },
export class FileUploadComponent implements ControlValueAccessor {

@Input() progress:Observable<number>;
@Input() nameBefore:string | undefined;
onChange: Function;
@Input() isDisabled:boolean;
file: File | null = null;

@HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {

  const file = event && event.item(0);
  this.onChange(file);
  this.file = file;
  this.nameBefore = undefined;

}

constructor( private host: ElementRef<HTMLInputElement> ) {
  this.isDisabled = false;
}

writeValue( value: null ) {
  this.host.nativeElement.value = '';
  this.file = null;
}

registerOnChange( fn: Function ) {
  this.onChange = fn;
}
setDisabledState(isDisabled: boolean): void {

  this.isDisabled = isDisabled;
  isDisabled ? this.isDisabled = true  : this.isDisabled = false;
}
registerOnTouched( fn: Function ) {
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
  this.onChange(file);
  this.host.nativeElement.value = '';
  this.nameBefore = undefined;
  this.file = file;
  this.setDisabledState(false);
}
//   onValidatorChange = () => {
//     debugger;

//   };
//   registerOnValidatorChange(onValidatorChange: () => void) {
//     debugger;
//     this.onValidatorChange = onValidatorChange;
//   }

//   validate(control: AbstractControl): ValidationErrors | null {
//   debugger;

//   if (this.fileUploadSuccess) {
//       return null;
//   }

//   const errors: UploadError = {
//       requiredFileType: this.requiredFileType
//   };

//   if (this.fileUploadError) {
//       errors.uploadFailed = true;
//   }

//   return errors;
// }
}

