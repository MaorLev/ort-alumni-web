import { NgModule } from '@angular/core';
import { FeatureFormModule } from '@features/feature-form';
import { SearchBarTeacherComponent } from './search-bar-teacher.component';
import { SearchBarTeacherStore } from './state/search-bar-teacher.store';
import { SearchBarTeacherQuery } from './state/search-bar-teacher.query';
import { SearchBarTeacherDataFormService } from './state/search-bar-teacher-data-form.service';


@NgModule({
  declarations: [SearchBarTeacherComponent],
  imports: [FeatureFormModule],
  providers: [SearchBarTeacherStore, SearchBarTeacherQuery, SearchBarTeacherDataFormService],
  exports: [SearchBarTeacherComponent]
})
export class SearchBarTeacherModule {}
