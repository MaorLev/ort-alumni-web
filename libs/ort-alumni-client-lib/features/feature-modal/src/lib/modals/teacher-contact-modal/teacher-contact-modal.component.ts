import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalInteface } from '../../modal.interface';

@Component({
  selector: 'ort-teacher-contact-modal',
  template: `
    <div class="box">
      <h3 mat-dialog-title>צור קשר עם המורה</h3>

      <div class="items" > </div>
        <p>טלפון: {{ data.dynamic_data?.phone }}</p>
        <p>אימייל: {{ data.dynamic_data?.mailforstudy }}</p>
        <button (click)="makeCall()">חייג</button>
    </div>
  `,
  styles: [`.box {
    padding: 16px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    h3 {
      margin: 0 0 16px;
      font-size: 20px;
      font-weight: bold;
    }

    p {
      margin: 8px 0;
      font-size: 16px;
    }

    button {
      margin: 8px;
      padding: 8px 16px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherContactModalComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      constant_data: ModalInteface;
      dynamic_data: any;
    }
  ) {}

  ngOnInit(): void {}

  makeCall() {
    if (this.data.dynamic_data && this.data.dynamic_data.phone) {
      window.location.href = `tel:${this.data.dynamic_data.phone}`;
    }
  }
}
