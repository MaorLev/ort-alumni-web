import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialCardComponent } from './ui-material-card.component';
import { UiMaterialChipsModule } from '@ui-components/ui-material-chips';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CheckActiveContentDirectiveModule } from '@utils/directives';
@NgModule({
  declarations: [UiMaterialCardComponent],
  imports: [CommonModule, MatCardModule, MatDividerModule,CheckActiveContentDirectiveModule, UiMaterialChipsModule],
  exports: [UiMaterialCardComponent],
})
export class UiMaterialCardModule {}
