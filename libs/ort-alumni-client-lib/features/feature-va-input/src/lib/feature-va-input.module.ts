import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAInputComponent } from './va-input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UiButtonModule } from '@ui-components/ui-button';
import { AbstractInputComponent } from './abstract-input/abstract-input.component';

@NgModule({
  declarations: [VAInputComponent, AbstractInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    UiButtonModule,
  ],
  exports: [VAInputComponent, AbstractInputComponent],
})
export class FeatureVaInputModule {}
