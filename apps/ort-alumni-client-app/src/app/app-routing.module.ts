import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third-party Modules
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { JwtModule } from '@auth0/angular-jwt';

// App Specific Service
import { StorageService } from '@utils/util-tools';

// Asynchronous function to retrieve token
export function tokenGetter() {
  const storage: StorageService = new StorageService('authStorage');
  const session = storage.getSession();

  return session ? session.access_token : '';
}

const routes: Routes = [
  // Application Routes
  {
    path: 'main',
    loadChildren: () =>
      import('./layout/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layout/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./layout/profile-layout/profile-layout.module').then(
        (m) => m.ProfileLayoutModule
      ),
  },
  {
    path: 'layout-teaching-portal',
    loadChildren: () =>
      import(
        './layout/layout-teaching-portal/layout-teaching-portal.module'
      ).then((m) => m.LayoutTeachingPortalModule),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // Fallback route
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:44324'],
        disallowedRoutes: [],
        skipWhenExpired: true,
      },
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
