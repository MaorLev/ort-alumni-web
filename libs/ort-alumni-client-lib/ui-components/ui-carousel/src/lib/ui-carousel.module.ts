import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgxGlideModule } from 'ngx-glide';
import { UiButtonModule } from '@ui-components/ui-button';

@NgModule({
  imports: [CommonModule, NgxGlideModule, UiButtonModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class UiCarouselModule {}
