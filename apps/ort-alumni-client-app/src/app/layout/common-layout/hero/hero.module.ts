import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ScrollerModule } from '../../../core/directives/scroller/scroller.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule,
  ScrollerModule],
  exports: [ HeroComponent]
})
export class HeroModule {}
