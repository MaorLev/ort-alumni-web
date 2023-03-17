import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
