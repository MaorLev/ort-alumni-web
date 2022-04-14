import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileLayoutComponent } from './profile-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent
    // ,
    // children: [
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileLayoutRoutingModule {}
