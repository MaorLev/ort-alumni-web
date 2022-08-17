import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaRadioComponent } from './va-radio.component';
import { AbstractRadioComponent } from './abstract-radio/abstract-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  declarations: [VaRadioComponent, AbstractRadioComponent],
  exports: [VaRadioComponent, AbstractRadioComponent],
})
export class FeatureVaRadioModule {}
