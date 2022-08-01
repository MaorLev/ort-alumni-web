import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'readableDate',
})
export class ReadableDatePipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    if (value === undefined) return value;

    const indexDot = value.indexOf('.');
    const indexT = value.indexOf('T');
    const relevant = value.substring(0, indexDot - 3);
    const splitterAll = relevant.split('T');

    const splitterDate = splitterAll[0].split('-');
    const readyDate = splitterDate.reduce((pre, curr) => {
      return curr + '/' + pre;
    });
    const dataAndTime = readyDate + ' ' + splitterAll[1];
    return dataAndTime;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ReadableDatePipe],
  exports: [ReadableDatePipe],
})
export class ReadableDatePipeModule {}
