import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlumnusService } from './state-alumnus/alumnus.service';
import { AlumnusStore } from './state-alumnus/alumnus.store';
import { AlumnusQuery } from './state-alumnus/alumnus.query';
import { AlertsService } from '@utils/util/core/central-message';
import { AlumnusDataService } from './state-alumnus/alumnus.data.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AlumnusService,
    AlumnusStore,
    AlumnusQuery,
    AlumnusDataService,
    AlertsService
  ],
})
export class AlumnusModule {}
