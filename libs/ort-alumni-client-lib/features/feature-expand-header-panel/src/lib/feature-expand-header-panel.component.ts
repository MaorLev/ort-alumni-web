import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'ort-feature-expand-header-panel',
  templateUrl: './feature-expand-header-panel.component.html',
  styleUrls: ['./feature-expand-header-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureExpandHeaderPanelComponent {
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  panelOpened: boolean = false;

  togglePanel(event: MouseEvent): void {
    event.stopPropagation();
    this.panel.toggle();
  }

  onOpened(): void {
    this.panelOpened = true;
  }

  onClosed(): void {
    this.panelOpened = false;
  }
}
