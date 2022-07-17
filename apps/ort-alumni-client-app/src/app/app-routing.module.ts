import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
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
  { path: '', redirectTo: 'main', pathMatch: 'full' },

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
//need to treat with async way
export function tokenGetter() {
  const temp = localStorage.getItem('session');
  if (temp) {
    const session = JSON.parse(temp);
    return session.access_token;
  }
  return '';
}
@NgModule({
  // QuicklinkStrategy Liberary for drop preloadingStrategy
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
