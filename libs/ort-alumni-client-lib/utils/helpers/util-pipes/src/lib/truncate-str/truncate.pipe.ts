import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(str: string | null, n?: number) {
    if (str === null) return null;

    if (!n) return str.substring(0, 15) + '...';

    return str.length > n ? str.substring(0, n - 1) + ' ...' : str;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [TruncatePipe],
  exports: [TruncatePipe],
})
export class TruncatePipeModule {}
