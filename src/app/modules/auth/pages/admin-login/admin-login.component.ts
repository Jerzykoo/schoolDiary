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

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  public form: UntypedFormGroup = this.fb.group({
    email: [
      'jan@gmail.com',
      [Validators.required, Validators.maxLength(256), email],
    ],
    password: ['Test123!', [Validators.required, Validators.maxLength(64)]],
  });
  public checkboxForm: UntypedFormGroup = this.fb.group({
    isRemember: [false],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit() {

    console.log(this.authService);

    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService
        .adminGoogleLogin({ token: user.idToken })
        .subscribe((res: any) => {
          this.router.navigate(['/admin/dashboard']);
        });

    });
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
}
