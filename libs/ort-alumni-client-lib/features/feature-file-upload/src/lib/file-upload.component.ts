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
// import { catchError, finalize, Observable, of } from 'rxjs';


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
//   @Input() requiredFileType: string;

//   fileName = '';

//   fileUploadError = false;

//   fileUploadSuccess = false;

//   uploadProgress: Observable<number | null>;

//   disabled = false;

//   constructor(private httpClient: HttpClient) {}

//   onChange = (fileName: any) => {


//   };

//   onTouched = () => {


//   };

//   onValidatorChange = () => {
//     debugger;

//   };

//   onClick(fileUpload: HTMLInputElement) {
//     debugger;

//     this.onTouched();
//     fileUpload.click();
//   }

//   onFileSelected(event: any) {
//     debugger;
//     const file: File = event.target.files[0];
//     if (file) {
//       this.fileName = file.name;

//       const formData = new FormData();

//       formData.append('image', file);

//       this.fileUploadError = false;

//       this.httpClient
//       .post<{
//         dbpath: string
//       }>("https://localhost:44324" + '/Image/Add/ImgTeacher', formData, {
//         reportProgress: true,
//         observe: 'events',
//       })
//       .pipe(
//         catchError((error) => {
//             debugger;

//             this.fileUploadError = true;
//             return of(error);
//           }),
//           finalize(() => {

//             debugger;
//             this.uploadProgress = of(null);
//           })
//           )
//           .subscribe((event) => {

//             debugger;
//             if (event.type == HttpEventType.UploadProgress) {
//               this.uploadProgress = of(Math.round(
//                 100 * (event.loaded / event.total)
//                 ));
//               } else if (event.type == HttpEventType.Response) {
//             this.fileUploadSuccess = true;
//             this.onChange(this.fileName);
//             this.onValidatorChange();
//           }
//         });
//     }
//   }

//   writeValue(value: any) {
//     debugger;
//     this.fileName = value;
//   }
//   registerOnChange(onChange: any): void {
//     debugger;
//     this.onChange = onChange;
//   }
//   registerOnTouched(onTouched: any): void {
//     debugger;
//     this.onTouched = onTouched;
//   }
//   setDisabledState(disabled: boolean) {
//     debugger;
//     this.disabled = disabled;
//   }

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

@Input() progress:Observable<number>;
@Input() nameBefore:string | undefined;
onChange: Function;
@Input() isDisabled:boolean;
file: File | null = null;
// onFileDropped($event: any) {
//   debugger;

//   const files = $event;
//   this.emitFiles(files)

// }

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
  // clear file input
  this.host.nativeElement.value = '';
  this.file = null;
}

registerOnChange( fn: Function ) {
  this.onChange = fn;
}
setDisabledState(isDisabled: boolean): void {
debugger;
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

}

