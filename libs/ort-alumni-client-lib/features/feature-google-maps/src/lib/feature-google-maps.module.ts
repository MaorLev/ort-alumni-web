import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { UiSpinnerModule } from '@ui-components/ui-spinner';


@NgModule({
  imports: [CommonModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    UiSpinnerModule
  ],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent],
  providers: []
})
export class FeatureGoogleMapsModule {}
