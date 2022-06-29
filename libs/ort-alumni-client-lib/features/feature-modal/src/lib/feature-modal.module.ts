import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries

import { UiButtonModule } from '@ui-components/ui-button';
import { MatInputModule } from '@angular/material/input';
import { SearchTamplateComponent } from './tamplates/search-data/search-tamplate.component';
import { FeatureGoogleMapsModule } from '@features/feature-google-maps';

@NgModule({
  declarations: [SearchTamplateComponent],
  imports: [CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    UiButtonModule, MatInputModule,
    FeatureGoogleMapsModule
  ],
  exports: [SearchTamplateComponent],
})
export class FeatureModalModule {}
