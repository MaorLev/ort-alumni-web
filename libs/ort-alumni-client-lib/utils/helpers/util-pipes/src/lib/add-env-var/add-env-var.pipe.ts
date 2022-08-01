import { environment } from '@environments';
import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'addEnvVar',
})
export class AddEnvVarPipe implements PipeTransform {
  env: string = environment.endPointApi;
  transform(value: string): string {
    const full_path = this.env + '/' + value;
    return full_path;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [AddEnvVarPipe],
  exports: [AddEnvVarPipe],
})
export class AddEnvVarPipeModule {}
