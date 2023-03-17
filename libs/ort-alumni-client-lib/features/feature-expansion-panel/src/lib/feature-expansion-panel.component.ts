import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {} from '@angular/material/expansion';
import {
  FormBuilderService,
  FormComponent,
  VaInputInterface
} from '@features/feature-form';
import { StepForm, StepsForm } from './stepsForm.interfaces';
import { ButtonAction } from '@ui-components/ui-button';
import {
  PanelActionHandler
} from './state/panel-action-handler.service';
import { map, Observable } from 'rxjs';
import { PanelStateService } from './state/panel-state.service';
import { PanelActionType } from './state/panel-action-type.enum';
import { PaneInitialState } from './state/panel-model';

export interface InitialMode {
  indexToStart?: number,
  isWaiting?:boolean
}

@Component({
  selector: 'ort-expansion-panel',
  templateUrl: './feature-expansion-panel.component.html',
  styleUrls: ['./feature-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PanelStateService,
      useFactory: () =>
        new PanelStateService(PaneInitialState, new PanelActionHandler())
    }
  ]
})
export class FeatureExpansionPanelComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  @Input() stepsForm: StepsForm;
  @Output() submitted;

  @Input() initialDetail: InitialMode;
  @ViewChild('myform') formStep: FormComponent;

  get btnAction(): typeof ButtonAction {
    return ButtonAction;
  }

  constructor(
    private _formBuilderService: FormBuilderService,
    public state: PanelStateService
  ) {
    this.submitted = new EventEmitter<FormGroup>();
  }

  ngOnInit(): void {
    this.initialization(this.initialDetail);
  }
  initialization(detail: InitialMode | undefined) {

    const isWaiting = detail ? detail.isWaiting ? true : false : false;
    this.state.actions$.next({
      type: PanelActionType.Init,
      data: { length: this.stepsForm.steps.length, index: detail ? detail.indexToStart : 0}
    });
    isWaiting ? this.state.actions$.next({
      type: PanelActionType.waitingMode
    }) : null;
    this.formGroup = this.formGroupInitalization();
  }
  formGroupInitalization(): FormGroup {
    const controls: Record<string, VaInputInterface> = {};
    this.stepsForm.steps.forEach((step: StepForm) => {
      const ctrls = step.stepGroupForm.controls;
      for (const control in ctrls) {
        controls[control] = ctrls[control];
      }
    });

    return this._formBuilderService.buildStepperGroup(controls);
  }

  onRollBackDisabled(index: number) {
    this.state.actions$.next({
      type: PanelActionType.rollBackDisabled,
      data: { index: index }
    });
  }
  onGetDisabledStep(index: number): Observable<boolean> {
    return this.state.specificStep(index).pipe(map((step) => step.disabled));
  }

  addDataToMainFormGroup(stepGroup: FormGroup) {
    for(const control in stepGroup.controls) {
      this.formGroup.setControl(control, stepGroup.controls[control]);
    }
    // this.formGroup.patchValue(stepGroup.value);
  }

  onStepSubmit(stepGroup: FormGroup) {
    if (stepGroup.valid) {
      this.addDataToMainFormGroup(stepGroup);
      this.state.actions$.next({ type: PanelActionType.nextStep });
    } else {
      stepGroup.markAllAsTouched();
    }
  }
  onStepsSubmit(stepGroup: FormGroup) {
    this.addDataToMainFormGroup(stepGroup);
    if (this.formGroup.valid) this.submitted.emit(this.formGroup);
    else {
      stepGroup.markAllAsTouched();
    }
  }

  onAction(actionRole: ButtonAction, group?: FormGroup) {
    switch (actionRole) {
      case this.btnAction.StepSubmited:
        if (group) this.onStepSubmit(group);
        break;
      case this.btnAction.Prev:
        this.state.actions$.next({ type: PanelActionType.prevStep });
        break;
      case this.btnAction.StepsSubmited:
        if (group) this.onStepsSubmit(group);
        break;
      case this.btnAction.Next:
        this.state.actions$.next({ type: PanelActionType.nextStep });
        break;
    }
  }

  ngOnDestroy(): void {
    this.state.subs.unsubscribe();
  }
}
