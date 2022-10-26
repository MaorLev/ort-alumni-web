import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CentralMessageConfigurationService } from './central-message-configuration.service';
import { lastValueFrom } from 'rxjs';
import { ApiErrorInterceptor } from './api-error.interceptor';


@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (messageConfig: CentralMessageConfigurationService) => async () => {
        const config = await lastValueFrom(messageConfig.loadConfiguration());
        return config;
      },
      deps: [CentralMessageConfigurationService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
  ]
})
export class CentralMessageModule {}
