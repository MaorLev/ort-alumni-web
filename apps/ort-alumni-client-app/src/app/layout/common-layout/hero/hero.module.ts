import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ScrollerModule } from '@utils/directives';


@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule,
  ScrollerModule],
  exports: [ HeroComponent]
})
export class HeroModule {}
