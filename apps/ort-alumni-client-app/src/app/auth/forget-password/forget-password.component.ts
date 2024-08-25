import { SessionDataService } from './../session/state/session.data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaFormInputInterface } from '@utils/core/global-interfaces';
import { LoginFormConfig } from '../login/login-form-config';
import { BehaviorSubject, Subject, switchMap } from 'rxjs';
import { AlertsService } from '@utils/util/core/central-message';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgetPasswordComponent implements OnInit {
  form: FormGroup;
  emailControl: VaFormInputInterface = LoginFormConfig.controls['email'];

  resetLinkSent = false;

  message:BehaviorSubject<string> = new BehaviorSubject<string>("")
  private resetPassword$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private authService: SessionDataService,
    private alert: AlertsService
  ) {
    this.resetPassword$
      .pipe(
        switchMap(() => {
          return this.authService.sendResetLink({ ...this.form.value });
        })
      )
      .subscribe(
        () => {
          alert.dynamicAlert('אנא בדוק את תיבת המייל שלך ופעל ע"פ ההנחיות')
        },
        () => {
          alert.dynamicAlert('אימייל לא מזוהה במערכת')}
      );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: undefined,
    });
    this.form.statusChanges.subscribe();
  }

  sendResetLink() {
    if (this.form.valid) {
      this.resetPassword$.next();
    }
  }
}
