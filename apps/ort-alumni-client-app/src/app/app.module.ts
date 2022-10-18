import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FeatureModalModule } from '@features/feature-modal';

import { AlertsService } from '@utils/services';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '@environments';
import { CentralMessageComponent, CentralMessageModule, Message, MessageLogger, MESSAGE_LOGGERS } from '@utils/util/core/central-message';
class MessageConsoleLoggerr implements MessageLogger {
  logMessage(message: Message): void {
    console.log('My Custom Logger Maorr', message);
  }
}
class MessageServerLoggerr implements MessageLogger {
  logMessage(message: Message): void {
    console.log('Send to server', message);
  }
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuicklinkModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CentralMessageModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }
    },
    AlertsService,
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageConsoleLoggerr,
      multi: true,
    },
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageServerLoggerr,
      multi: true,
    },
  ],
  bootstrap: [AppComponent, CentralMessageComponent]
})
export class AppModule {}
