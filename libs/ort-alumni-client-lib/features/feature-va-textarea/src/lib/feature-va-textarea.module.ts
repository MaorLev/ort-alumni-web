import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaTextareaComponent } from './va-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,],
  declarations: [VaTextareaComponent],
  exports: [VaTextareaComponent],
})
export class FeatureVaTextareaModule {}
