import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Inject,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
export interface MapsLocation {
  lat: number;
  lng: number;
}
export class dataMaps {
  center: MapsLocation;
}
@Component({
  selector: 'ort-alumni-web-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  zoom = 17;
  // israel = { lat: 31.771959, lng: 35.217018 };
  center: google.maps.LatLngLiteral ;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  constructor(
    httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: dataMaps
  ) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLvBsaw5DCjHumjSGMjFKUb7hNmybAdXc&libraries=places',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
      this.center = this.data.center;
  }

  ngOnInit(): void {
    this.markerPositions.push(this.data.center);
  }
}
