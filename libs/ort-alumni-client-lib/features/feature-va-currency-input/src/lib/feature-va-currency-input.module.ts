import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UiButtonModule } from '@ui-components/ui-button';
import { AbstractCurrencyInputComponent } from './abstract-currency-input/abstract-currency-input.component';
import { VaCurrencyInputComponent } from './va-currency-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    UiButtonModule,
  ],
  declarations: [VaCurrencyInputComponent, AbstractCurrencyInputComponent],
  exports: [VaCurrencyInputComponent, AbstractCurrencyInputComponent],
})
export class FeatureVaCurrencyInputModule {}
