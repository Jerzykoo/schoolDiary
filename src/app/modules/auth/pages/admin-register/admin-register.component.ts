import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { finalize, from, switchMap } from 'rxjs';
import { AuthService } from '../../store/service';
import { email } from 'src/app/utils/validators';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
})
export class AdminRegisterComponent {
  public isSubmitting = false;
  public showPasswordScreen = false;

  public form: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(256), email]],
    schoolName: ['', [Validators.required, Validators.maxLength(256)]],
    role: ['Admin', [Validators.required, Validators.maxLength(256)]],
    name: ['', [Validators.required, Validators.maxLength(256)]],
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
    this.authService.adminReg(this.form.value).subscribe((res: any) => {
      console.log(res);

      this.router.navigate(['/admin/dashboard']);
    });
  }
}
