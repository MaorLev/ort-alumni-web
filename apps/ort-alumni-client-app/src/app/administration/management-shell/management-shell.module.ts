import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementShellComponent } from './management-shell.component';
import { ManagementShellRoutingModule } from './management-shell.routing';
import { UiIconModule } from '@ui-components/ui-icon';
import { ArticleModule } from '../../pages/article/article.module';



@NgModule({
  declarations: [
    ManagementShellComponent
  ],
  imports: [
    CommonModule,
    ManagementShellRoutingModule,
    UiIconModule,
    ArticleModule
  ]
})
export class ManagementShellModule { }
