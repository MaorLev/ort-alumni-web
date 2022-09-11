import { RouterModule } from '@angular/router';
import { FeatureTableModule } from '@features/feature-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTreeNodeComponent } from './ui-tree-node.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    FeatureTableModule,
    RouterModule,
  ],
  declarations: [UiTreeNodeComponent],
  exports: [UiTreeNodeComponent],
})
export class UiTreeNodeModule {}
