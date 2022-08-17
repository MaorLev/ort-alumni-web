import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractSelectAutoCompleteComponent } from './abstract-select-auto-complete/abstract-select-auto-complete.component';
import { VaSelectAutoCompleteComponent } from './va-select-auto-complete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule],
  declarations: [
    AbstractSelectAutoCompleteComponent,
    VaSelectAutoCompleteComponent,
  ],
  exports: [AbstractSelectAutoCompleteComponent, VaSelectAutoCompleteComponent],
})
export class FeaureVaSelectAutoCompleteModule {}
