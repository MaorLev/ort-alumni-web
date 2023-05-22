import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaDorpdownSelectionComponent } from './va-dorpdown-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AbstractSelectComponent } from './abstract-select/abstract-select.component';
import { ObservableOrArrayPipe } from './observable-or-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [VaDorpdownSelectionComponent, AbstractSelectComponent, ObservableOrArrayPipe],
  exports: [VaDorpdownSelectionComponent, AbstractSelectComponent],
})
export class FeatureVaDropdownSelectionModule {}
