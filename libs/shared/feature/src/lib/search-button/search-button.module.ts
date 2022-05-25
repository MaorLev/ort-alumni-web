import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchButtonComponent } from './search-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchInputDialogComponent } from './search-input-dialog/search-input-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchButtonComponent, SearchInputDialogComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  exports: [SearchButtonComponent, SearchInputDialogComponent],
})
export class SearchButtonModule {}
