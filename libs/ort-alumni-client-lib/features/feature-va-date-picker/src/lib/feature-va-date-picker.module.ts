import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaDatePickerComponent } from './va-date-picker.component';
import { AbstractDatePickerComponent } from './abstract-date-picker/abstract-date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatInputModule],
  declarations: [VaDatePickerComponent, AbstractDatePickerComponent],
  exports: [VaDatePickerComponent, AbstractDatePickerComponent],
})
export class FeatureVaDatePickerModule {}
