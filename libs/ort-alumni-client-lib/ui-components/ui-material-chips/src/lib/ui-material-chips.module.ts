import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialChipsComponent } from './ui-material-chips.component';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  imports: [CommonModule, MatChipsModule],
  declarations: [UiMaterialChipsComponent],
  exports: [UiMaterialChipsComponent],
})
export class UiMaterialChipsModule {}
