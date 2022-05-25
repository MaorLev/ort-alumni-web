import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAInputComponent } from './va-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from '@shared/ui';


@NgModule({
  declarations: [VAInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonModule
  ],
  exports: [VAInputComponent],
})
export class VAInputModule {}
