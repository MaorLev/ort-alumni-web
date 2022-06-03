import { SessionService } from './../session/state/session.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ortInput } from '@shared/feature';
import { loginForm } from './loginForm.data';
import { Router } from '@angular/router';
import { InOutSmooth } from '@shared/util';

@Component({
  selector: 'alumni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  group = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  controls: ortInput[] = loginForm;

  constructor(private authService: SessionService, private router: Router) {}

  onSubmit() {
    if (this.group.valid) {
      this.authService
        .login({...this.group.value})
        .subscribe(() => this.router.navigateByUrl(''));
    }
  }
}
