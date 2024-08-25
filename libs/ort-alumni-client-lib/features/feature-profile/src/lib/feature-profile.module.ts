import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureProfileComponent } from './feature-profile.component';
// import { ProfileState } from './state/profile-state';
// import { ProfileAbstractDataState } from './state/profile-abstract-data-state';
import { FeatureFormModule } from '@features/feature-form';
import { FeatureNavigationModule } from '@features/feature-navigation';
// const profileUnionState = {
//   provide: ProfileState,
//   useFactory: (model: ProfileAbstractDataState) =>
//   new ProfileState(
//     model.allInOneConfigs()
//     ),

//     deps: [ProfileAbstractDataState],


// };
@NgModule({
  declarations: [FeatureProfileComponent],
  imports: [CommonModule, FeatureFormModule, FeatureNavigationModule],
  // providers:[profileUnionState],
  exports: [FeatureProfileComponent],
})
export class FeatureProfileModule {}
