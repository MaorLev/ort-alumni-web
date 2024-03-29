import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureExpansionPanelComponent } from './feature-expansion-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UiButtonModule } from '@ui-components/ui-button';
import { MatInputModule } from '@angular/material/input';
import { UiIconModule } from '@ui-components/ui-icon';
import { FeatureFormModule } from '@features/feature-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    UiIconModule,
    MatFormFieldModule,
    UiButtonModule,
    MatInputModule,
    FeatureFormModule,
    ReactiveFormsModule
  ],
  declarations: [FeatureExpansionPanelComponent],
  exports: [FeatureExpansionPanelComponent]
})
export class FeatureExpansionPanelModule {}
