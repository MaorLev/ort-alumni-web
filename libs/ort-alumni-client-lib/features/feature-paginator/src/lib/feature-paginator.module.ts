import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePaginatorComponent } from './feature-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  imports: [CommonModule, MatPaginatorModule],
  declarations: [FeaturePaginatorComponent],
  exports: [FeaturePaginatorComponent],
})
export class FeaturePaginatorModule {}
