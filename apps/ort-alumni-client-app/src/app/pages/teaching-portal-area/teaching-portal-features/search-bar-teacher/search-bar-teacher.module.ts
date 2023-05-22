import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FeatureFormModule } from '@features/feature-form';
import { SearchBarTeacherComponent } from './search-bar-teacher.component';
// import { FormBuilderService } from '@features/feature-form';
import { SearchBarTeacherStore } from './state/search-bar-teacher.store';
import { SearchBarTeacherQuery } from './state/search-bar-teacher.query';
import { SearchBarTeacherDataFormService } from './state/search-bar-teacher-data-form.service';

// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarTeacherComponent],
  imports: [FeatureFormModule],
  providers: [SearchBarTeacherStore, SearchBarTeacherQuery, SearchBarTeacherDataFormService],
  exports: [SearchBarTeacherComponent]
})
export class SearchBarTeacherModule {}
