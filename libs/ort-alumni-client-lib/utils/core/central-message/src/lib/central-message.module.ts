import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralMessageComponent } from './central-message.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CentralMessageConfigurationService } from './state/central-message-configuration.service';
import { ApiErrorInterceptor } from './state/api-error.interceptor';
import { AbstractCentralMessageService } from './state/abstract-central-message-service';
import { CentralMessageService } from './state/central-message.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CentralMessageComponent],
  exports: [CentralMessageComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (messageConfig: CentralMessageConfigurationService) => () => {
        messageConfig.loadConfiguration().toPromise();
      },
      deps: [CentralMessageConfigurationService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },// */
    {
      provide: AbstractCentralMessageService,
      useClass: CentralMessageService
    }
  ]
})
export class CentralMessageModule {}
