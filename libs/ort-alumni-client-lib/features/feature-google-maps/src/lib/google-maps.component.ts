import { LoadingGoogleApiService } from './loading-google-api.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable } from 'rxjs/internal/Observable';
import { FeatureGoogleMaps } from './google-maps.interface';

@Component({
  selector: 'ort-alumni-web-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsComponent implements OnInit {
  @Input() data: FeatureGoogleMaps | null;
  apiLoaded: Observable<boolean>;
  zoom: number;
  min_height: string;
  height: string;
  width: string;

  center: google.maps.LatLngLiteral;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  constructor(api:LoadingGoogleApiService) {
    this.zoom = 10;
    // israel = { lat: 31.771959, lng: 35.217018 };
    this.center = { lat: 31.771959, lng: 35.217018 };
    this.min_height = '100px';
    this.height = '400px';
    this.width = '100%';
    this.apiLoaded = api.Loaded;
  }

  ngOnInit(): void {

    this.center = this.data?.center || this.center;
    this.zoom = this.data?.zoom || this.zoom;
    this.min_height = this.data?.min_height || this.min_height;
    this.height = this.data?.height || this.height;
    this.width = this.data?.width || this.width;

    this.markerPositions.push(this.center);
  }
}
