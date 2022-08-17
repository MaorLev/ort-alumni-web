import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CheckListComponent } from './check-list.component';
import { AbstractCheckListComponent } from './abstract-check-list/abstract-check-list.component';
@NgModule({
  imports: [CommonModule,ReactiveFormsModule, MatSelectModule, MatListModule, MatInputModule],
  declarations: [CheckListComponent, AbstractCheckListComponent],
  exports: [CheckListComponent, AbstractCheckListComponent],
})
export class FeatureCheckListModule {}
