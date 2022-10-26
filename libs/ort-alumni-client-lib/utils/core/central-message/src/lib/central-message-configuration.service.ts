import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CentralMessageConfig } from './central-message.types';

@Injectable({
  providedIn: 'root',
})
export class CentralMessageConfigurationService {
  // apps/ng-playground/src/assets/central-message.config.json
  private readonly CONFIG_URL = 'assets/configurations/central-message.config.json';
  private config$: Observable<CentralMessageConfig>;

  configuration: CentralMessageConfig;

  constructor(private httpClient: HttpClient) {}

  loadConfiguration() {

    this.config$ = this.httpClient
      .get<CentralMessageConfig>(this.CONFIG_URL)
      .pipe(shareReplay(1));
    this.config$.subscribe((res) => {
      this.configuration = res;
    });
    return this.config$;
  }
}
