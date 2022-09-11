import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeatureGoogleMaps } from '@features/feature-google-maps';
export class dataMaps {
  center: google.maps.LatLngLiteral;
}

@Component({
  template: `
    <ort-alumni-web-google-maps [data]="data"></ort-alumni-web-google-maps>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: FeatureGoogleMaps) {}
}
