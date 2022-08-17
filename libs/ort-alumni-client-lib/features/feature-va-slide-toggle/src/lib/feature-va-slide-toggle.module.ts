import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaSlideToggleComponent } from './va-slide-toggle.component';
import { AbstractSlideToggleComponent } from './abstract-slide-toggle/abstract-slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule, MatListModule],
  declarations: [VaSlideToggleComponent, AbstractSlideToggleComponent],
  exports: [VaSlideToggleComponent, AbstractSlideToggleComponent],
})
export class FeatureVaSlideToggleModule {}
