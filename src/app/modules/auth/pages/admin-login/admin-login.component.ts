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
    private toast: HotToastService
  ) {}

  public submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.adminLogin(this.form.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/admin/dashboard']);
    });
  }
}
