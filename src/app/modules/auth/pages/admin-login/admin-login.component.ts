import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { email } from 'src/app/utils/validators';
import { AuthService } from '../../store/service';
import { HotToastService } from '@ngneat/hot-toast';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  public form: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(256), email]],
    password: ['', [Validators.required, Validators.maxLength(64)]],
  });
  public checkboxForm: UntypedFormGroup = this.fb.group({
    isRemember: [false],
  });
  private subscription$: Subscription = new Subscription();

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit() {
    this.subscription$.add(
      this.socialAuthService.authState.subscribe((user) => {
        if (user) {
          this.authService
            .adminGoogleLogin({ token: user.idToken })
            .subscribe((res: any) => {
              if (res?.message) {
                this.toast.warning(res?.message);
              } else {
                this.router.navigate(['/admin/dashboard']);
              }
            });
        }
      })
    );
  }

  public submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.adminLogin(this.form.value).subscribe((res: any) => {
      this.router.navigate(['/admin/dashboard']);
    });
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
