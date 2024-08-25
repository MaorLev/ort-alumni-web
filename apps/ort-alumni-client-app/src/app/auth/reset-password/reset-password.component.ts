import { SessionDataService } from './../session/state/session.data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { Subject, switchMap } from 'rxjs';
import { ResetPasswordFormConfig } from './reset-pass-form-config';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertsService } from '@utils/util/core/central-message';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface reserPayload {
  role:string,
  email:string
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  // tokenControl:VaFormInputInterface = ResetPasswordFormConfig.controls["token"];
  token: string;
  payload:reserPayload;
  passwordControl: VaFormInputInterface =
    ResetPasswordFormConfig.controls['password'];

  passwordReset = false;

  private resetPassword$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private authService: SessionDataService,
    activatedRouter: ActivatedRoute,
    private router: Router,
    private alert: AlertsService,
    private jwtHelper: JwtHelperService
  ) {
    const tkn = activatedRouter.snapshot.paramMap.get('token');
    if (tkn && !this.jwtHelper.isTokenExpired(tkn))
    {
      this.payload = this.jwtHelper.decodeToken(tkn)
      this.token = tkn;
    }
    else{
      this.alert.dynamicAlert("פג תוקף הטוקן");
    }

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: undefined,
    });
    this.form.statusChanges.subscribe();


    this.resetPassword$
      .pipe(
        switchMap(() => {
          const newPassword  = this.form.controls['password'].value;
          // console.log('np', newPassword);
          return this.authService.resetPassword(this.payload.email, newPassword);
        })
      )
      .subscribe(() => {
        this.alert.dynamicAlert(
          'הסיסמא אופסה בהצלחה, הינך מועבר למסך ההתחברות'
        );
        this.router.navigateByUrl('auth/login', { skipLocationChange: false });
      });
  }

  onResetPassword() {
    if (this.form.valid) {
      this.resetPassword$.next();
    }
  }
}
