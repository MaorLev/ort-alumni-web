import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaChipsSelectComponent } from './va-chips-select.component';
import { AbstractChipsSelectComponent } from './abstract-chips-select/abstract-chips-select.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [CommonModule, MatChipsModule, MatFormFieldModule, MatInputModule
  , MatIconModule, MatAutocompleteModule, ReactiveFormsModule],
  declarations: [VaChipsSelectComponent, AbstractChipsSelectComponent],
  exports: [VaChipsSelectComponent, AbstractChipsSelectComponent],
})
export class VaChipsSelectModule {}
