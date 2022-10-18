import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
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
@Component({
  selector: 'ort-expansion-panel',
  templateUrl: './feature-expansion-panel.component.html',
  styleUrls: ['./feature-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureExpansionPanelComponent implements OnInit {
  formGroup: FormGroup;
  @Input() stepsForm: StepsForm;
  private step: number;
  disabledSteps: Map<number, boolean>;
  @Output() submitted;
  initialStepsSize: number;

  @ViewChild('myform') formStep: FormComponent;

  get buttonRoles(): typeof ButtonAction {
    return ButtonAction;
  }
  set Step(index: number) {
    this.step = index;
    console.log('set', this.step);
  }
  get Step(): number {
    console.log('get', this.step);
    return this.step;
  }
  get DisabledSteps() {
    return this.disabledSteps;
  }

  message: string;

  get submittedMessage() {
    return this.message;
  }
  set submittedMessage(messageTo: string) {
    this.message = messageTo;
  }
  @Input() set ifSubmitted(mode: 'success' | 'failed' | 'undefined') {
    switch (mode) {
      case 'success':
        this.nextStep();
        this.ExcludeDisabledStep();
        break;
      case 'failed':
        this.submittedMessage = 'משתמש לא התווסף אנא נסה מאוחר יותר';
        break;
      case 'undefined':
        break;
    }
  }
  constructor(
    private _formBuilderService: FormBuilderService,
    private router: Router
  ) {
    this.submitted = new EventEmitter<FormGroup>();
    this.disabledSteps = new Map();
    this.initialDisabledSteps();
  }

  ngOnInit(): void {
    this.initialStepsSize = this.stepsForm.steps.length;
    this.formGroup = this.formGroupInitalization();
  }
  initialDisabledSteps(stepToStart?: number) {
    this.step = stepToStart ? stepToStart : 0;
    this.ExcludeDisabledStep();
  }
  // oppositeDisabledSteps() {
  //   for (const step in this.disabledSteps.keys) {
  //     const stp = parseInt(step);
  //     if (stp !== this.Step) this.DisabledSteps.set(stp, !this.disabledSteps.get(stp));

  //   }
  // }
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

  setDisabledStep(step: number, val: boolean) {
    this.disabledSteps.set(step, val);
  }
  getDisabledStep(step: number) {
    return this.disabledSteps.get(step);
  }

  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
    console.log(this.step);
  }

  ExcludeDisabledStep() {
    for (let i = 0; i < this.initialStepsSize; i++) {
      this.DisabledSteps.set(i, false);
    }
    this.setDisabledStep(this.step, true);
  }

  addDataToMainFormGroup(stepGroup: FormGroup) {
    this.formGroup.patchValue(stepGroup.value);
    // console.log(this.formGroup);
  }

  onStepSubmit(stepGroup: FormGroup) {
    console.log(this.formStep);
    // console.log(this.Step);
    if (stepGroup.valid) {
      this.setDisabledStep(this.Step, true);
      this.addDataToMainFormGroup(stepGroup);
      this.nextStep();
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
        this.prevStep();
        break;
      case ButtonAction.StepsSubmited:
        if (group) this.onStepsSubmit(group);
        break;
      case ButtonAction.Next:
        this.nextStep;
        break;
      default:
        break;
    }
  }
}
