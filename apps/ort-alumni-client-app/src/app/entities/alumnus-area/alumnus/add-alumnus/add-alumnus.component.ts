import {
  Component,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeatureExpansionPanelComponent, PanelActionType } from '@features/feature-expansion-panel';
import { AlertsService } from '@utils/util/core/central-message';
import { catchError } from 'rxjs';
import { AlumnusDataService } from '../state-alumnus/alumnus.data.service';
import { AddAlumnusFormConfig } from './add-alumnus-form.config';


@Component({
  selector: 'app-add-alumnus',
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
export class AddAlumnusComponent {

  @ViewChild('panel') panel:FeatureExpansionPanelComponent;
  constructor(
    public alumnusFormConfig: AddAlumnusFormConfig,
    private alumnusService: AlumnusDataService,
    private alertService:AlertsService
  ) {}


  onSubmitted(group: FormGroup): void {
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
