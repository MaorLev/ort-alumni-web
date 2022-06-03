import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatProgressBarModule, MatIconModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
