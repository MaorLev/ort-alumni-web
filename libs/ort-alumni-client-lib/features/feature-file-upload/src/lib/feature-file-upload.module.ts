import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
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
    UiIconModule,
    ReactiveFormsModule
  ],
  exports: [FileUploadComponent, DndDirective, AbstractFileUploadComponent],
})
export class FeatureFileUploadModule {}
