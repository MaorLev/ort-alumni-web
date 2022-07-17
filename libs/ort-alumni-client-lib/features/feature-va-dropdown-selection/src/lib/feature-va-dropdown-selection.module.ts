import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaDorpdownSelectionComponent } from './va-dorpdown-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule ],
  declarations: [VaDorpdownSelectionComponent],
  exports: [VaDorpdownSelectionComponent],
})
export class FeatureVaDropdownSelectionModule {}
