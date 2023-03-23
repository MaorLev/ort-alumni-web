import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAlumnusComponent } from './profile-alumnus.component';
import { RouterModule } from '@angular/router';
import { UiButtonModule } from '@ui-components/ui-button';
import { UiSpinnerModule } from '@ui-components/ui-spinner';

@NgModule({
  declarations: [ProfileAlumnusComponent],
  imports: [
    CommonModule,
    UiButtonModule,
    UiSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileAlumnusComponent,
        children: [
          { path: '', redirectTo: 'alumnus-detail', pathMatch: 'full' },
          {
            path: 'alumnus-detail',
            loadChildren: () =>
              import(
                '../../../../entities/alumnus-area/alumnus/alumnus-detail/alumnus-detail.module'
              ).then((m) => m.AlumnusDetailModule),
          },
          {
            path: 'alumnus-edit',
            loadChildren: () =>
              import(
                '../../../../entities/alumnus-area/alumnus/edit-alumnus/edit-alumnus.module'
              ).then((m) => m.EditAlumnusModule),
          },
        ],
      },
    ]),
  ]
})
export class ProfileAlumnusModule {}
