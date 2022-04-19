import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonComponent } from './mat-button/mat-button.component';
import {MatButtonModule} from "@angular/material/button";
@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [MatButtonComponent],
  exports: [MatButtonComponent],
})
export class SharedUiButtonsModule {}
