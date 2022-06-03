import { SessionDataService } from './../session/state/session.data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ortInput } from '@shared/feature';
import { loginForm } from '../login/loginForm.data';

@Component({
  selector: 'alumni-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  emailControl:ortInput = loginForm[0];
  constructor(
    private fb: FormBuilder,
    private authService: SessionDataService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: undefined,
      thumbnail: null
    });
    this.form.statusChanges.subscribe(res => console.log(res))
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.resetPassword({...this.form.value});
    }

  }
}
