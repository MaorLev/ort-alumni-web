import { SessionDataService } from './../session/state/session.data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaInputInterface } from '@features/feature-va-input';
import { LoginFormConfig } from '../login/login-form-config';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  emailControl:VaInputInterface = LoginFormConfig.controls["email"];
  constructor(
    private fb: FormBuilder,
    private authService: SessionDataService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: undefined,
      thumbnail: null
    });
    this.form.statusChanges.subscribe()
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.resetPassword({...this.form.value});
    }

  }
}
