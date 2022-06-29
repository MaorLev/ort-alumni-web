import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  imports: [CommonModule,
    HttpClientJsonpModule,
    GoogleMapsModule],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent],
})
export class FeatureGoogleMapsModule {}
