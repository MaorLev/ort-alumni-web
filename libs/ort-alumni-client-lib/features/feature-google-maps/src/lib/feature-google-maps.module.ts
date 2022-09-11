
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { UiSpinnerModule } from '@ui-components/ui-spinner';


@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    UiSpinnerModule,
  ],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent]
})
export class FeatureGoogleMapsModule {}
