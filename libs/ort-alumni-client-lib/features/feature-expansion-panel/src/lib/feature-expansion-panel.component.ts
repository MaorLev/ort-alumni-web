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
import { Router } from '@angular/router';
import { StateService } from '@utils/util-tools';
import { PanelActionHandler, PanelGroupSteps } from './panel-action-handler';
import { PanelStateService } from './panel-state.service';
import { map, Observable } from 'rxjs';



export const PaneInitialState:PanelGroupSteps = {
  steps: [{index: 0, disabled:false}],
  activeIndex: 0,
  lastActive:0
}


export enum PanelActionType  {
  Init = 'init',
  ExcludeStep = 'excludeStep',
  setCurrentStep = 'setCurrentStep',
  nextStep = 'nextStep',
  prevStep = 'prevStep',
  setDisabledStep = 'setDisabledStep',
  rollBackDisabled = 'rollBackDisabled'
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
        new PanelStateService(
          PaneInitialState,
          new PanelActionHandler()
        )
    }
  ]
})
export class FeatureExpansionPanelComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  @Input() stepsForm: StepsForm;
  @Output() submitted;
  initialStepsSize: number;

  @ViewChild('myform') formStep: FormComponent;

  get buttonRoles(): typeof ButtonAction {
    return ButtonAction;
  }

  constructor(
    private _formBuilderService: FormBuilderService,
    private router: Router,
    public state:PanelStateService
  ) {
    this.submitted = new EventEmitter<FormGroup>();
  }


  ngOnInit(): void {
    this.initialStepsSize = this.stepsForm.steps.length;
    this.state.actions$.next({type: PanelActionType.Init, data:{length: this.initialStepsSize}});
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

  onRollBackDisabled(index:number)
  {
    this.state.actions$.next({type: PanelActionType.rollBackDisabled, data:{index: index}});
  }
  onGetDisabledStep(index: number) :Observable<boolean> {
    return this.state.specificStep(index).pipe(map(step => step.disabled))
  }

  addDataToMainFormGroup(stepGroup: FormGroup) {
    this.formGroup.patchValue(stepGroup.value);
  }

  onStepSubmit(stepGroup: FormGroup) {
    console.log(this.formStep);

    if (stepGroup.valid) {
      // this.setDisabledStep(this.Step, true);
      // this.state.actions$.next({type:PanelActionType.setDisabledStep, data:{index: this.state.getActiveStep.index, length: null}});
      this.addDataToMainFormGroup(stepGroup);
      // this.nextStep();
      this.state.actions$.next({type:PanelActionType.nextStep})
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
      case ButtonAction.StepSubmited:
        if (group) this.onStepSubmit(group);
        break;
      case ButtonAction.Prev:
        this.state.actions$.next({type:PanelActionType.prevStep})
        break;
      case ButtonAction.StepsSubmited:
        if (group) this.onStepsSubmit(group);
        break;
      case ButtonAction.Next:
        this.state.actions$.next({type:PanelActionType.nextStep})
        break;
      default:
        break;
    }
  }

  ngOnDestroy(): void {
    this.state.subs.unsubscribe();
  }
}
