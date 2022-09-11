import { UiTreeNodeModule } from './../../../../ui-components/ui-tree-node/src/lib/ui-tree-node.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { MapsModalComponent } from './modals/google-maps-modal/maps-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UiButtonModule } from '@ui-components/ui-button';
import { MatInputModule } from '@angular/material/input';
import { FeatureGoogleMapsModule } from '@features/feature-google-maps';
import { SearchModalComponent } from './modals/search-modal/search-modal.component';

import { FeatureModalDirective } from './feature-modal.directive';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { ModalMenuTreeComponent } from './modals/modal-menu-tree/modal-menu-tree.component';
import { RouterModule } from '@angular/router';
import { FeatureExpansionPanelNodeModule } from '@features/feature-expansion-panel-node';
import { UiIconModule } from '@ui-components/ui-icon';

@NgModule({
  declarations: [
    SearchModalComponent,
    MapsModalComponent,
    FeatureModalDirective,
    ModalMenuTreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule,
    MatDialogModule,
    MatFormFieldModule,
    UiButtonModule,
    MatInputModule,
    FeatureGoogleMapsModule,
    FeatureExpansionPanelNodeModule,
    UiIconModule
  ],
  exports: [QuicklinkModule, SearchModalComponent, FeatureModalDirective, ModalMenuTreeComponent,],
  providers: [NgDialogAnimationService],
})
export class FeatureModalModule {}
