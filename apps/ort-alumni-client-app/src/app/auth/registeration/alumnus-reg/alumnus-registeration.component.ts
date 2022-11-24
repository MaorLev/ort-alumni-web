import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureExpansionPanelComponent, PanelActionType } from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError } from 'rxjs';
import { AlumnusFormConfig } from './alumnus-form.config';
import { AlumnusDataService } from './state/alumnus.data.service';

@Component({
  selector: 'app-alumnus-registeration',
  template: `
    <ort-expansion-panel
      #panel
      [stepsForm]="alumnusFormConfig.alumnusForm"
      (submitted)="onSubmitted($event)"

    >
    </ort-expansion-panel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumnusRegisterationComponent {

  @ViewChild('panel') panel:FeatureExpansionPanelComponent;
  constructor(
    public alumnusFormConfig: AlumnusFormConfig,
    private alumnusService: AlumnusDataService,
    private alertService:AlertsService
  ) {}


  onSubmitted(group: FormGroup): void {
    console.log(group.value);
    this.alumnusService
      .createAlumnus(group.value)
      .pipe(
        catchError((error) => {
          this.alertService.dynamicAlert('.שגיאת מערכת: משתמש לא התווסף, אנא נסה מאוחר יותר');
          return error;
        })
      )
      .subscribe(() => {
        this.panel.state.actions$.next({type:PanelActionType.nextStep});
        this.panel.state.actions$.next({type:PanelActionType.ExcludeStep});
      });
  }
}
