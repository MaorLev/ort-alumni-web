import { SessionService } from './../session/state/session.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormConfig } from './login-form-config';
import { Router } from '@angular/router';
import { InOutSmooth } from '@assets';
import { FormGroup } from '@angular/forms';
import { AlertsService } from '@utils/util/core/central-message';
import { SessionQuery } from '../session/state/session.query';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [InOutSmooth],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

loginConfig = LoginFormConfig;

  constructor(private authService: SessionService, private router: Router, private alertService: AlertsService, private session:SessionQuery) {}

  onSubmit(group: FormGroup) {
    if (group.valid) {
      this.authService
        .login({...group.value})
        .subscribe(() => {
            this.router.navigateByUrl('');
            this.alertService.dynamicAlert(`ברוך הבא ${this.session.getName()}!`,'', 5000 )
    });
    }else group.markAllAsTouched();
  }
}
