
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import {  HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environments';

import { FeatureModalModule } from '@features/feature-modal';
import {  MAT_DIALOG_SCROLL_STRATEGY_PROVIDER } from '@angular/material/dialog';
import { AlertsService } from '@utils/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeatureModalModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,

    AlertsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
