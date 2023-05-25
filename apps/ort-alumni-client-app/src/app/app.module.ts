import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core Angular Modules
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third-party Modules
import { QuicklinkModule } from 'ngx-quicklink';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// App Specific Modules
import { CentralMessageModule } from '@utils/util/core/central-message';


// Environment
import { environment } from '@environments';
import { AlumnusModule } from './entities/alumnus-area/alumnus/alumnus.module';
import { TeacherModule } from './entities/alumnus-area/teacher/teacher.module';
import { StudentModule } from './entities/student/student.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    MatSnackBarModule,
    CentralMessageModule,
    // FeatureModalModule,
    AlumnusModule,
    TeacherModule,
    StudentModule,
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
    // { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
