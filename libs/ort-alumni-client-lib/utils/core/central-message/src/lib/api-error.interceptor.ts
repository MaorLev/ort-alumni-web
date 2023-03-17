import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CentralMessageConfigurationService } from './central-message-configuration.service';
import { MessageType, TimeToShow } from './central-message.types';
import { AlertsService } from './alerts.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  alertIsReady: boolean;
  constructor(
    private alertService: AlertsService,
    private messageConfig: CentralMessageConfigurationService
  ) {
    this.alertIsReady = true;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {


        if (this.messageConfig.configuration.enableLoggers) {
          console.log('Error report ',{
            type: MessageType.Error,
            httpResponseDetails: {
              statusCode: error.status as number,
              message: error.message,
              errorDetails: error.error
            },
            description: 'Something bad happens'
          });
        }
        if(error.status !== 404)
        this.alertDebounceTime(typeof(error.error) === 'string' ? error.error : null);
        else return throwError(()=> error);

        return of(error);
      })
    );
  }
  private alertDebounceTime(message:string | null){
    if (this.alertIsReady)
    this.alertService.dynamicAlert(message ? message : "אופס... משהו השתבש'");
  this.alertIsReady = false;
  setTimeout(
    () => (this.alertIsReady = true),
    TimeToShow.interceptorAlertTime
  );
  }
}