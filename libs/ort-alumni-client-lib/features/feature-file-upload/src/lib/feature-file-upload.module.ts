import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DndDirective } from './dnd.directive';
import { UiIconModule } from '@ui-components/ui-icon';
import { AbstractFileUploadComponent } from './abstract-file-upload/abstract-file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FileUploadComponent,
    DndDirective,
    AbstractFileUploadComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    UiIconModule,
    ReactiveFormsModule
  ],
  exports: [FileUploadComponent, DndDirective, AbstractFileUploadComponent],
})
export class FeatureFileUploadModule {}
