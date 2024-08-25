import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileSubmittedType } from './state/profile-submitted-type';
import { ProfileState } from './state/profile-state';
import { ProfileAbstractDataState } from './state/profile-abstract-data-state';

@Component({
  selector: 'ort-feature-profile',
  templateUrl: './feature-profile.component.html',
  styleUrls: ['./feature-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProfileComponent implements OnDestroy {
  @Output() submitted = new EventEmitter<ProfileSubmittedType>();
  @Input() viewModel: any;
  // constructor(public configState: ProfileState) {}
  configState:ProfileState;
  constructor(model: ProfileAbstractDataState ) {
    this.configState = new ProfileState(model.allInOneConfigs());
  }

  onActiveChange(groupName: string) {
    this.configState.setActiveGroupConfig(groupName);
  }

  onSubmit(group: FormGroup) {
    this.submitted.emit({
      group: group,
      groupName: this.configState.getActive().groupName,
    });
  }

  ngOnDestroy(): void {
    this.configState.backToDefaultActive();
  }
}