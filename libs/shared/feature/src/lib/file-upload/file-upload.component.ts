/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient, HttpEventType } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';


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
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() =>  FileUploadComponent),
      multi: true,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  @Input() requiredFileType: string;

  fileName = '';

  fileUploadError = false;

  fileUploadSuccess = false;

  uploadProgress: number | null;

  disabled = false;

  constructor(private httpClient: HttpClient) {}

  onChange = (fileName: any) => {};

  onTouched = () => {};

  onValidatorChange = () => {};

  onClick(fileUpload: HTMLInputElement) {

    this.onTouched();
    fileUpload.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('image', file);

      this.fileUploadError = false;

      this.httpClient
        .post<{
          dbpath: string
        }>("https://localhost:5001" + '/Image/Add/ImgTeacher', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(
          catchError((error) => {

            this.fileUploadError = true;
            return of(error);
          }),
          finalize(() => {

            this.uploadProgress = null;
          })
        )
        .subscribe((event) => {

          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(
              100 * (event.loaded / event.total)
            );
          } else if (event.type == HttpEventType.Response) {
            this.fileUploadSuccess = true;
            this.onChange(this.fileName);
            this.onValidatorChange();
          }
        });
    }
  }

  writeValue(value: any) {
    this.fileName = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  registerOnValidatorChange(onValidatorChange: () => void) {
    this.onValidatorChange = onValidatorChange;
}

validate(control: AbstractControl): ValidationErrors | null {

  if (this.fileUploadSuccess) {
      return null;
  }

  const errors: UploadError = {
      requiredFileType: this.requiredFileType
  };

  if (this.fileUploadError) {
      errors.uploadFailed = true;
  }

  return errors;
}
}
