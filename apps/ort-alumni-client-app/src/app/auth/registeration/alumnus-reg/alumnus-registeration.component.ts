import {
  Component,

  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
import { AlumnusFormConfig } from './alumnus-form.config';
import { AlumnusDataService } from './state/alumnus.data.service';

@Component({
  selector: 'app-alumnus-registeration',
  template: `
    <ort-expansion-panel
      [stepsForm]="alumnusFormConfig.alumnusForm"
      (submitted)="onSubmitted($event)"
      [ifSubmitted]="submitMode"
    >
    </ort-expansion-panel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnusRegisterationComponent{
  submitMode: 'success' | 'failed' | 'undefined' = 'undefined';
  constructor(
    public alumnusFormConfig: AlumnusFormConfig,
    private changeDetectorRef: ChangeDetectorRef,
    private alumnusService: AlumnusDataService
  ) {}


  onSubmitted(group: FormGroup): void {
    console.log(group.value);
    this.alumnusService
      .createAlumnus(group.value)
      .pipe(
        catchError((error) => {
          this.submitMode = 'failed';
          this.changeDetectorRef.detectChanges();
          return error;
        })
      )
      .subscribe(() => {

        this.submitMode = 'success';
        this.changeDetectorRef.detectChanges();
      });
  }
}
