import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaPhoneComponent } from './va-phone.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { AbstractPhoneComponent } from './abstract-phone/abstract-phone.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [VaPhoneComponent, AbstractPhoneComponent],
  exports: [VaPhoneComponent, AbstractPhoneComponent],
})
export class FeatureVaPhoneModule {}
