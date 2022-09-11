import { Component, ChangeDetectionStrategy, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'ort-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTableComponent {
  @ContentChild(TemplateRef) rowTemplate: any;

  @Input() headers: string[] | undefined;
  @Input() data: any[] | undefined;
}
