import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SearchBarTeacherDataFormService } from './state/search-bar-teacher-data-form.service';
import { FormGroup } from '@angular/forms';
import {
  FormBuilderService,
  FormComponent,
  FormInterface,
} from '@features/feature-form';
import { SearchBarTeacherStore } from './state/search-bar-teacher.store';
import { StaticEntitiesDataQuery } from '../../../../entities/static-entities-backend-data/static-entities-data.query';
import { cloneDeep } from '@utils/util-tools';
import { Router } from '@angular/router';
import { SearchBarTeacherModel } from './state/search-bar-teacher.model';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-search-bar-teacher',
  templateUrl: './search-bar-teacher.component.html',
  styleUrls: ['./search-bar-teacher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarTeacherComponent implements OnInit, AfterViewInit {
  configuration: FormInterface;
  group: FormGroup;

  showAdvanced = false;

  constructor(
    private searchBarTeacherDataFormService: SearchBarTeacherDataFormService,
    private searchBarTeacherStore: SearchBarTeacherStore,
    private staticEntitiesDataQuery: StaticEntitiesDataQuery,
    private formBuilderService: FormBuilderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.configuration =
      this.searchBarTeacherDataFormService.SearchBarTeacherFormData;
    this.initialGroup();
  }

  private initialGroup() {
    this.group = this.formBuilderService.buildStepperGroup(
      this.configuration.controls
    );
  }

  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }

  ngAfterViewInit(): void {
    this.group.controls['studyprogram'].valueChanges
      .pipe(startWith(null))
      .subscribe((studyprogram) => {
        if (studyprogram) {
          const newCourses = cloneDeep(
            this.staticEntitiesDataQuery.getCoursesBySPId(studyprogram.id)
          );
          this.searchBarTeacherStore.setActiveCoursesList(newCourses);
        } else {
          const newCourses = cloneDeep(
            this.staticEntitiesDataQuery.getCourses()
          );
          this.searchBarTeacherStore.setActiveCoursesList(newCourses);
        }
      });
  }
  onReset(): void {
    this.group.reset();
    this.searchBarTeacherStore.reset();
  }

  onSubmit() {
    const group = this.group;

    const result: SearchBarTeacherModel = { ...group.value };

    // if (group.valid) {

    // }else group.markAllAsTouched();
    this.searchBarTeacherStore.setSearchParams(result);

    this.router.navigate(['/layout-teaching-portal/teacher-results']);
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
