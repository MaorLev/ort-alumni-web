import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ],
  exports:[HomeComponent]
})
export class HomeModule {}