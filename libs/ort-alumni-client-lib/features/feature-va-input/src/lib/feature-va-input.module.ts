import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAInputComponent } from './va-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UiButtonModule } from '@ui-components/ui-button';


@NgModule({
  declarations: [VAInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    UiButtonModule
  ],
  exports: [VAInputComponent],
})
export class FeatureVaInputModule {}
