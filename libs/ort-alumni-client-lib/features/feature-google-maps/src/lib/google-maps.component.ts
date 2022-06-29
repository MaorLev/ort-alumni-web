import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { GoogleMap, MapGeocoder } from '@angular/google-maps';
import { catchError, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'ort-alumni-web-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  @Input() zoom = 12;
  israel = { lat: 31.771959, lng: 35.217018 };
  @Input()  center: google.maps.LatLngLiteral;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLvBsaw5DCjHumjSGMjFKUb7hNmybAdXc&libraries=places',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {
  }
}
