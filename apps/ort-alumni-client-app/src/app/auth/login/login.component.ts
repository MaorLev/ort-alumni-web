import { SessionService } from './../session/state/session.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormConfig } from './login-form-config';
import { Router } from '@angular/router';
import { InOutSmooth } from '@assets';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginConfig = LoginFormConfig;

  constructor(private authService: SessionService, private router: Router) {}

  onSubmit(group: FormGroup) {
    if (group.valid) {
      this.authService
        .login({...group.value})
        .subscribe(() => this.router.navigateByUrl(''));
    }else group.markAllAsTouched();
  }
}
